import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Notifications = () => {
  const [data, setData] = useState();
  const host = "https://api.green-api.com";
  const idt = window.localStorage.getItem("idData");
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    fetch(`${host}/waInstance${idt}/receiveNotification/${token}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.body);
      });
  }, []);
  return (
    <>
      <h3>Получить сообщения</h3>
      <p>Отправитель : +{data?.senderData?.sender?.slice(0, 11)}</p>
      <p>Названия чата : {data?.senderData?.chatName}</p>
      <p>Сообщение : {data?.messageData?.extendedTextMessageData?.text}</p>
    </>
  );
};

export default Notifications;
