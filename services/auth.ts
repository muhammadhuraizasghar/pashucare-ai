import { UserProfile, FarmAnimal, BreedingRecord, HealthRecord, Reminder, CalendarSettings } from "../types";

// --- MOCK DATABASE (Simulating Cloud Storage) ---
// In a real app, this would use Firebase, Supabase, or a REST API.
// We use a separate LocalStorage key "cloud_db" to simulate the server.

const CLOUD_DELAY = 800; // Simulated network delay

const getCloudDB = () => {
    const db = localStorage.getItem('mock_cloud_db');
    return db ? JSON.parse(db) : { users: {}, data: {} };
};

const saveCloudDB = (db: any) => {
    localStorage.setItem('mock_cloud_db', JSON.stringify(db));
};

// --- AUTH SERVICES ---

export const loginUser = async (identifier: string, password: string): Promise<UserProfile> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const db = getCloudDB();
            const user = Object.values(db.users).find((u: any) => u.email === identifier || u.phone === identifier) as any;
            
            if (user && user.password === password) {
                const { password, ...profile } = user;
                resolve(profile as UserProfile);
            } else {
                reject(new Error("Invalid credentials"));
            }
        }, CLOUD_DELAY);
    });
};

export const registerUser = async (profile: Partial<UserProfile>, password: string): Promise<UserProfile> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const db = getCloudDB();
            const existing = Object.values(db.users).find((u: any) => u.email === profile.email || u.phone === profile.phone);
            
            if (existing) {
                reject(new Error("User already exists"));
                return;
            }

            const newUser = {
                id: 'user_' + Date.now(),
                ...profile,
                password // storing plaintext for mock only!
            };

            db.users[newUser.id] = newUser;
            db.data[newUser.id] = { animals: [], breeding: [], health: [], reminders: [], settings: null }; // Init empty data
            saveCloudDB(db);

            const { password: _, ...userProfile } = newUser;
            resolve(userProfile as UserProfile);
        }, CLOUD_DELAY);
    });
};

// --- DATA SYNC SERVICES ---

interface CloudData {
    animals: FarmAnimal[];
    breedingRecords: BreedingRecord[];
    healthRecords: HealthRecord[];
    reminders: Reminder[];
    calendarSettings: CalendarSettings;
}

export const syncCloudData = async (userId: string, localData: CloudData): Promise<CloudData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const db = getCloudDB();
            const cloudData = db.data[userId] || { 
                animals: [], breeding: [], health: [], reminders: [], settings: localData.calendarSettings 
            };

            // SIMPLE MERGE STRATEGY:
            // Combine Local + Cloud arrays, remove duplicates by ID.
            // In a real app, you'd use timestamps (updatedAt) to determine the winner.
            
            const mergeArrays = (local: any[], cloud: any[]) => {
                const map = new Map();
                cloud.forEach(item => map.set(item.id, item));
                local.forEach(item => map.set(item.id, item)); // Local overwrites cloud in this simple conflict resolution
                return Array.from(map.values());
            };

            const mergedData: CloudData = {
                animals: mergeArrays(localData.animals, cloudData.animals || []),
                breedingRecords: mergeArrays(localData.breedingRecords, cloudData.breeding || []),
                healthRecords: mergeArrays(localData.healthRecords, cloudData.health || []),
                reminders: mergeArrays(localData.reminders, cloudData.reminders || []),
                calendarSettings: localData.calendarSettings // Prefer local settings update
            };

            // Save back to Cloud
            db.data[userId] = {
                animals: mergedData.animals,
                breeding: mergedData.breedingRecords,
                health: mergedData.healthRecords,
                reminders: mergedData.reminders,
                settings: mergedData.calendarSettings
            };
            saveCloudDB(db);

            resolve(mergedData);
        }, CLOUD_DELAY);
    });
};

export const deleteUserAccount = async (userId: string): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const db = getCloudDB();
            delete db.users[userId];
            delete db.data[userId];
            saveCloudDB(db);
            resolve();
        }, CLOUD_DELAY);
    });
};