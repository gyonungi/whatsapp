import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Chat.module.css"
const Chat = () => {
  const host = "https://api.green-api.com";
  const idt = window.localStorage.getItem('idData')
  const token = window.localStorage.getItem('token')
/*   const idt = "1101824274";
  const token = "38cec7f6effd4d1088960a1323080606a610c23c159341e693"; */
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const getMessage = async () => {
    await fetch(`${host}/waInstance${idt}/sendMessage/${token}`, {
      method: "POST",
      body: JSON.stringify({
        chatId: `${phone}@c.us`,
        message: `${text}`,
      }),
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    getMessage();
  };

  const handleNotif = (e) => {
    e.preventDefault();
    navigate("/not");
  };
  return (
    <div className={s.box}>
      <h3>Отправить сообщения</h3>
      <div className={s.text}>
      <input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        placeholder="Номер Телефона"
      ></input>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Текст"
      ></input>
        </div>
      <button onClick={handleClick}>Отправить сообщения</button>
    <div>
        <button onClick={e => handleNotif(e)}>Получить сообщение</button>
    </div>
    </div>
  );
};

export default Chat;
