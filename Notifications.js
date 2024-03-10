import PushNotification from 'react-native-push-notification';


class Notifications {
    constructor() {
        PushNotification.configure({
            onRegister: function (token) {
            console.log('TOKEN:', token);
            },
            onNotification: function (notification) {
            console.log('NOTIFICATION:', notification);
            },
            popInitialNotification: true,
            requestPermissions: false,
        });

        PushNotification.createChannel(
            {
                channelId: "reminder",
                channelName: 'Task reminder notifications',
            },
            () => {},
        );
    }

    schduleNotificationA(date, title, message) {
        PushNotification.localNotificationSchedule({
            channelId: "reminder",
            title : title,
            message: message, 
            date,
            repeatType: 'day',
        });
    }

    cancelNotification() {
        PushNotification.cancelAllLocalNotifications();
    }
}

export default new Notifications();