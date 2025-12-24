
import { LocalNotifications } from '@capacitor/local-notifications';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

export const initCapacitorPlugins = async () => {
    if (Capacitor.isNativePlatform()) {
        // Set status bar style
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: '#166534' }); // primary green

        // Request notification permission
        const permission = await LocalNotifications.checkPermissions();
        if (permission.display !== 'granted') {
            await LocalNotifications.requestPermissions();
        }
    }
};

export const sendLocalNotification = async (title: string, body: string, id: number = Math.floor(Math.random() * 10000)) => {
    if (Capacitor.isNativePlatform()) {
        const permission = await LocalNotifications.checkPermissions();
        if (permission.display === 'granted') {
            await LocalNotifications.schedule({
                notifications: [
                    {
                        title,
                        body,
                        id,
                        schedule: { at: new Date(Date.now() + 1000) }, // Send after 1s
                        sound: 'default',
                        attachments: [],
                        actionTypeId: '',
                        extra: null
                    }
                ]
            });
        }
    } else if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body });
    }
};
