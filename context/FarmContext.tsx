import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FarmAnimal, BreedingRecord, HealthRecord, Reminder, CalendarSettings, Coordinates } from '../types';
import { useAuth } from './AuthContext';
import { syncCloudData } from '../services/auth';
import { sendLocalNotification } from '../utils/notifications';

interface FarmContextType {
  animals: FarmAnimal[];
  breedingRecords: BreedingRecord[];
  healthRecords: HealthRecord[];
  reminders: Reminder[];
  calendarSettings: CalendarSettings;
  location: Coordinates | null;
  syncStatus: 'synced' | 'syncing' | 'offline' | 'error';
  lastSyncTime: Date | null;
  addAnimal: (animal: FarmAnimal) => void;
  deleteAnimal: (id: string) => void;
  addBreedingRecord: (record: BreedingRecord) => void;
  updateBreedingStatus: (id: string, status: 'Completed' | 'Failed') => void;
  deleteBreedingRecord: (id: string) => void;
  addHealthRecord: (record: HealthRecord) => void;
  deleteHealthRecord: (id: string) => void;
  addReminder: (reminder: Reminder) => void;
  deleteReminder: (id: string) => void;
  toggleReminderComplete: (id: string) => void;
  updateCalendarSettings: (settings: CalendarSettings) => void;
  triggerSync: () => Promise<void>;
}

const FarmContext = createContext<FarmContextType | undefined>(undefined);

export const FarmProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  
  // Data State
  const [animals, setAnimals] = useState<FarmAnimal[]>([]);
  const [breedingRecords, setBreedingRecords] = useState<BreedingRecord[]>([]);
  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [calendarSettings, setCalendarSettings] = useState<CalendarSettings>({
      region: 'Punjab',
      desiOffset: 0,
      primaryCalendar: 'gregorian'
  });
  
  // Location State
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [showLocationDisclosure, setShowLocationDisclosure] = useState(false);

  // Sync State
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing' | 'offline' | 'error'>('offline');
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setShowLocationDisclosure(false);
          localStorage.setItem('location_permission_granted', 'true');
        },
        (err) => {
            console.log("Location access denied or unavailable", err);
            setShowLocationDisclosure(false);
        },
        { timeout: 10000 }
      );
    }
  };

  // 1. Load Local Data on Mount
  useEffect(() => {
    const savedAnimals = localStorage.getItem('farm_animals');
    const savedBreeding = localStorage.getItem('farm_breeding');
    const savedHealth = localStorage.getItem('farm_health');
    const savedReminders = localStorage.getItem('farm_reminders');
    const savedCalendar = localStorage.getItem('farm_calendar_settings');
    const permissionGranted = localStorage.getItem('location_permission_granted');

    if (savedAnimals) setAnimals(JSON.parse(savedAnimals));
    if (savedBreeding) setBreedingRecords(JSON.parse(savedBreeding));
    if (savedHealth) setHealthRecords(JSON.parse(savedHealth));
    if (savedReminders) setReminders(JSON.parse(savedReminders));
    if (savedCalendar) {
        const parsed = JSON.parse(savedCalendar);
        // Migration support for old 'offset' if it exists
        if (parsed.offset !== undefined && parsed.desiOffset === undefined) {
            parsed.desiOffset = parsed.offset;
            delete parsed.offset;
        }
        // Cleanup old Hijri settings if present
        if (parsed.hijriOffset !== undefined) delete parsed.hijriOffset;
        if (parsed.primaryCalendar === 'hijri') parsed.primaryCalendar = 'gregorian';

        setCalendarSettings(parsed);
    }

    // Check if we should show disclosure or just request
    if (permissionGranted === 'true') {
        requestLocation();
    } else {
        // Show disclosure after a small delay to let app load
        setTimeout(() => setShowLocationDisclosure(true), 2000);
    }
  }, []);

  // 2. Persist to LocalStorage on Change
  useEffect(() => {
    localStorage.setItem('farm_animals', JSON.stringify(animals));
    localStorage.setItem('farm_breeding', JSON.stringify(breedingRecords));
    localStorage.setItem('farm_health', JSON.stringify(healthRecords));
    localStorage.setItem('farm_reminders', JSON.stringify(reminders));
    localStorage.setItem('farm_calendar_settings', JSON.stringify(calendarSettings));
  }, [animals, breedingRecords, healthRecords, reminders, calendarSettings]);

  // 3. Trigger Sync when User Logs In or Data Changes
  const triggerSync = async () => {
      if (!user) {
          setSyncStatus('offline');
          return;
      }

      setSyncStatus('syncing');
      try {
          const localData = {
              animals,
              breedingRecords,
              healthRecords,
              reminders,
              calendarSettings
          };

          const mergedData = await syncCloudData(user.id, localData);

          setAnimals(mergedData.animals);
          setBreedingRecords(mergedData.breedingRecords);
          setHealthRecords(mergedData.healthRecords);
          setReminders(mergedData.reminders);
          setCalendarSettings(mergedData.calendarSettings);

          setSyncStatus('synced');
          setLastSyncTime(new Date());
          sendLocalNotification(
            calendarSettings.primaryCalendar === 'desi' ? 'ڈیٹا سنک ہو گیا' : 'Data Synced',
            calendarSettings.primaryCalendar === 'desi' ? 'آپ کا تمام فارم ریکارڈ بادل (Cloud) سے ہم آہنگ کر دیا گیا ہے۔' : 'All your farm records have been synced to the cloud.'
          );
      } catch (error) {
          console.error("Sync failed", error);
          setSyncStatus('error');
      }
  };

  useEffect(() => {
      if (user) {
          triggerSync();
      } else {
          setSyncStatus('offline');
      }
  }, [user]);

  // Check for due reminders on load
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const dueReminders = reminders.filter(r => !r.isCompleted && r.date === today);
    
    if (dueReminders.length > 0) {
        sendLocalNotification(
            calendarSettings.primaryCalendar === 'desi' ? 'آج کی یاد دہانیاں' : 'Today\'s Reminders',
            calendarSettings.primaryCalendar === 'desi' 
                ? `آپ کے پاس آج کے لیے ${dueReminders.length} یاد دہانیاں ہیں۔` 
                : `You have ${dueReminders.length} reminders due today.`
        );
    }
  }, [reminders.length]); // Only check when length changes or on mount

  const handleUpdate = (updateFn: () => void) => {
      updateFn();
      if(user) {
          setSyncStatus('syncing');
          setTimeout(() => triggerSync(), 1000); 
      }
  };

  const addAnimal = (animal: FarmAnimal) => handleUpdate(() => setAnimals(prev => [...prev, animal]));
  const deleteAnimal = (id: string) => handleUpdate(() => setAnimals(prev => prev.filter(a => a.id !== id)));

  const addBreedingRecord = (record: BreedingRecord) => handleUpdate(() => setBreedingRecords(prev => [...prev, record]));
  const updateBreedingStatus = (id: string, status: 'Completed' | 'Failed') => handleUpdate(() => setBreedingRecords(prev => prev.map(r => r.id === id ? { ...r, status } : r)));
  const deleteBreedingRecord = (id: string) => handleUpdate(() => setBreedingRecords(prev => prev.filter(r => r.id !== id)));

  const addHealthRecord = (record: HealthRecord) => handleUpdate(() => setHealthRecords(prev => [...prev, record]));
  const deleteHealthRecord = (id: string) => handleUpdate(() => setHealthRecords(prev => prev.filter(r => r.id !== id)));

  const addReminder = (reminder: Reminder) => handleUpdate(() => {
      setReminders(prev => [...prev, reminder]);
      sendLocalNotification(
        calendarSettings.primaryCalendar === 'desi' ? 'یاد دہانی شامل کر دی گئی' : 'Reminder Added',
        calendarSettings.primaryCalendar === 'desi' ? `${reminder.title} کے لیے یاد دہانی مقرر کر دی گئی ہے۔` : `Reminder set for ${reminder.title}.`
      );
  });
  const deleteReminder = (id: string) => handleUpdate(() => setReminders(prev => prev.filter(r => r.id !== id)));
  const toggleReminderComplete = (id: string) => handleUpdate(() => setReminders(prev => prev.map(r => r.id === id ? { ...r, isCompleted: !r.isCompleted } : r)));

  const updateCalendarSettings = (settings: CalendarSettings) => handleUpdate(() => setCalendarSettings(settings));

  return (
    <FarmContext.Provider value={{
      animals,
      breedingRecords,
      healthRecords,
      reminders,
      calendarSettings,
      location,
      syncStatus,
      lastSyncTime,
      triggerSync,
      addAnimal,
      deleteAnimal,
      addBreedingRecord,
      updateBreedingStatus,
      deleteBreedingRecord,
      addHealthRecord,
      deleteHealthRecord,
      addReminder,
      deleteReminder,
      toggleReminderComplete,
      updateCalendarSettings
    }}>
      {children}

      {/* Prominent Disclosure for Location (Google Play Requirement) */}
      {showLocationDisclosure && (
        <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-sm w-full p-8 shadow-2xl animate-fadeIn text-center">
                <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {calendarSettings.primaryCalendar === 'desi' ? 'مقام تک رسائی' : 'Location Access'}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    {calendarSettings.primaryCalendar === 'desi' 
                        ? 'پشو کیئر کو آپ کے علاقے کے مطابق درست موسم اور دیسی کیلنڈر کی تاریخیں دکھانے کے لیے مقام (Location) تک رسائی کی ضرورت ہے۔'
                        : 'PashuCare needs your location to provide accurate local weather updates and precise Desi calendar dates for your region.'}
                </p>
                <div className="space-y-3">
                    <button 
                        onClick={requestLocation}
                        className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-800 transition active:scale-95"
                    >
                        {calendarSettings.primaryCalendar === 'desi' ? 'اجازت دیں' : 'Allow Access'}
                    </button>
                    <button 
                        onClick={() => setShowLocationDisclosure(false)}
                        className="w-full bg-gray-100 text-gray-500 font-bold py-3 rounded-2xl hover:bg-gray-200 transition"
                    >
                        {calendarSettings.primaryCalendar === 'desi' ? 'بعد میں' : 'Maybe Later'}
                    </button>
                </div>
                <p className="text-[10px] text-gray-400 mt-6">
                    {calendarSettings.primaryCalendar === 'desi'
                        ? 'آپ اسے کسی بھی وقت فون کی سیٹنگز سے تبدیل کر سکتے ہیں۔'
                        : 'You can change this anytime in your device settings.'}
                </p>
            </div>
        </div>
      )}
    </FarmContext.Provider>
  );
};

export const useFarm = () => {
  const context = useContext(FarmContext);
  if (!context) {
    throw new Error('useFarm must be used within a FarmProvider');
  }
  return context;
};