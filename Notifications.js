import PushNotification from 'react-native-push-notification';
import { presets } from './babel.config';


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

    schduleNotification(date, title, message) {

        if (title == "PAROL 500 MG 20 TABLET") {
            presId = 1
        }
        else if (title == "A-FERIN ZERO 6 PLUS 250 MG/5 ML ORAL SUSPANSIYON (150 ML)") {
            presId = 2
        }
        else if (title == "IBUCOLD 200 MG/30 MG FILM KAPLI TABLET") {
            presId = 3
        }
        else if (title == "APIREKS COLD&FLU 200 MG/30 MG 24 FILM KAPLI TABLET") {
            presId = 4
        }
        else if (title == "DOLGIT %5 KREM (50 G)") {
            presId = 5
        }
        else if (title == "DOLVEN %5 JEL 40 GR") {
            presId = 6
        }
        else if (title == "AERIUS 5 MG 20 FİLM TABLET") {
            presId = 7
        }
        else if (title == "DESRINAL 5 MG 20 FILM KAPLI TABLET") {
            presId = 8
        }
        else if (title == "FULSAC 20 MG 24 KAPSUL") {
            presId = 9
        }
        else if (title == "DEPREKS 20 MG 24 KAPSÜL") {
            presId = 10
        }
        else if (title == "TRIBEKSOL 250 MG/ 250 MG/ 1 MG FILM KAPLI TABLET (50 TABLET)") {
            presId = 11
        }
        else if (title == "APIKOBAL 250 MG /250 MG /1 MG FILM KAPLI TABLET (30 FILM KAPLI TABLET)") {
            presId = 12
        }
        else if (title == "METPAMID 10 MG TABLET (30 TABLET)") {
            presId = 13
        }
        else if (title == "NASTIFRAN 10 MG/2 ML IM/IV ENJEKSIYONLUK COZELTI") {
            presId = 14
        }
        else if (title == "METIGAST 140 MG YUMUSAK KAPSUL (40 KAPSUL)") {
            presId = 15
        }
        else if (title == "METSIL 5 ML 40 MG 150 ML SÜSPANSİYON") {
            presId = 16
        }

        PushNotification.localNotificationSchedule({
            channelId: "reminder",
            title : title,
            message: message, 
            date,
            id: presId,
            repeatType: 'day',
        });
        console.log("id: " + presId)
    }

    cancelNotification(title) {
        if (title == "PAROL 500 MG 20 TABLET") {
            presId = 1
        }
        else if (title == "A-FERIN ZERO 6 PLUS 250 MG/5 ML ORAL SUSPANSIYON (150 ML)") {
            presId = 2
        }
        else if (title == "IBUCOLD 200 MG/30 MG FILM KAPLI TABLET") {
            presId = 3
        }
        else if (title == "APIREKS COLD&FLU 200 MG/30 MG 24 FILM KAPLI TABLET") {
            presId = 4
        }
        else if (title == "DOLGIT %5 KREM (50 G)") {
            presId = 5
        }
        else if (title == "DOLVEN %5 JEL 40 GR") {
            presId = 6
        }
        else if (title == "AERIUS 5 MG 20 FİLM TABLET") {
            presId = 7
        }
        else if (title == "DESRINAL 5 MG 20 FILM KAPLI TABLET") {
            presId = 8
        }
        else if (title == "FULSAC 20 MG 24 KAPSUL") {
            presId = 9
        }
        else if (title == "DEPREKS 20 MG 24 KAPSÜL") {
            presId = 10
        }
        else if (title == "TRIBEKSOL 250 MG/ 250 MG/ 1 MG FILM KAPLI TABLET (50 TABLET)") {
            presId = 11
        }
        else if (title == "APIKOBAL 250 MG /250 MG /1 MG FILM KAPLI TABLET (30 FILM KAPLI TABLET)") {
            presId = 12
        }
        else if (title == "METPAMID 10 MG TABLET (30 TABLET)") {
            presId = 13
        }
        else if (title == "NASTIFRAN 10 MG/2 ML IM/IV ENJEKSIYONLUK COZELTI") {
            presId = 14
        }
        else if (title == "METIGAST 140 MG YUMUSAK KAPSUL (40 KAPSUL)") {
            presId = 15
        }
        else if (title == "METSIL 5 ML 40 MG 150 ML SÜSPANSİYON") {
            presId = 16
        }

        PushNotification.cancelLocalNotification({id: presId});
        console.log("silinen id: " + presId)
    }
}

export default new Notifications();