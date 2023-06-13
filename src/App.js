import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Chat from "./Components/Chat/Chat";
import Notifications from "./Components/Notifications/Notifications";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/not" element={<Notifications />}></Route>
      </Routes>
    </div>
  );
}

export default App;
