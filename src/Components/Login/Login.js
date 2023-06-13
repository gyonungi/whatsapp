import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Chat from "../Chat/Chat";
import s from "./Login.module.css"
const Login = () => {
  const host = "https://api.green-api.com";
  const [idData, setIdData] = useState("");
  const [token, setToken] = useState("");
  const [photo, setPhoto] = useState();
  const [seconds, setSeconds] = useState(1);
  const navigate = useNavigate();

  const getApi = async () => {
    const res = await fetch(`${host}/waInstance${idData}/qr/${token}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setPhoto(json.message);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    getApi();
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(timer);
   
  });
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/chat");
  };
  useEffect(() => {
    window.localStorage.setItem('idData', idData)
    window.localStorage.setItem('token', token)
  }, [idData,token])
  return (
    <div className="App">
      <h3>Login Whats'app</h3>
      <form>  
        <div className={s.login}>
        <input
          placeholder="Введите IdInstance"
          onChange={(e) => setIdData(e.target.value)}
          value={idData}
        ></input>
        <input
          placeholder="Введите ApiTokenInstance"
          onChange={(e) => setToken(e.target.value)}
          value={token}
        ></input>
        </div>
        <button className={s.but} onClick={(e) => handleLogin(e)}>Отправить</button>
      </form>
      <h2> Отсканируйте QrCode</h2>
      <img src={`data:image/png;base64 , ${photo}`} alt="qr" />
      <div>
        <button className={s.but} onClick={(e) => handleClick(e)}>Перейти в чат </button>
      </div>

    </div>
  );
};

export default Login;
