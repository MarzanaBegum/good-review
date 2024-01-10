import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { USER_STATE } from "../../state";

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || " https://good-review.onrender.com";
const socket = io(SOCKET_URL);

function RealtimeNotification() {
    const [user] = useAtom(USER_STATE);

    useEffect(() => {
        socket.on("notification", (data) => {
            if (data.userId === user?._id) {
                notify(data);
            }
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("notification");
        };
    }, []);

    return <></>;
}

// const useRequestNotification = async () => {
//     useEffect(() => {
//         if (Notification.permission != "granted") {
//             Notification.requestPermission();
//         }
//     }, [Notification.permission]);
// };

type NotifyType = {
    title: string;
    desc: string;
};

const notify = (data: NotifyType) => {
    console.log(data);
    const notification = new Notification(data.title, {
        icon: "/icons/benefit.svg",
        body: data.desc,
    });
    notification.addEventListener("click", () => {
        window.open(`http://localhost:3000/dashboard/orders`);
    });
};

export default RealtimeNotification;
