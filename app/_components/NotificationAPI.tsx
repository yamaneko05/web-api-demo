"use client";

import { useEffect, useState } from "react";
import { button } from "../_variants/button";

export function NotificationAPI() {
  const [permission, setPermission] = useState<NotificationPermission>();

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();

    setPermission(permission);
  };

  const sendNotification = () => {
    const options: NotificationOptions = {
      body: "通知のボディー",
      icon: "http://localhost:3000/icon.png",
    };

    const notification = new Notification("テスト通知", options);

    notification.onclick = () => {
      window.open("https://www.mozilla.org", "_blank");
    };
  };

  useEffect(() => {
    setPermission(Notification.permission);
  }, []);

  return (
    <>
      <p className="mb-2">permission: {permission}</p>
      <button onClick={requestPermission} className={button()}>
        通知の権限をリクエスト
      </button>
      <button onClick={sendNotification} className={button()}>
        通知の送信テスト
      </button>
    </>
  );
}
