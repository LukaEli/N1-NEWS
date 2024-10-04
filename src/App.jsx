import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";

const App = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleUserSelect = (selectedUsername) => {
    setUsername(selectedUsername);
    localStorage.setItem("username", selectedUsername);
  };

  const handleLogout = () => {
    setUsername("");
    localStorage.removeItem("username");
  };

  return (
    <>
      <Navbar username={username} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<UserList handleUserSelect={handleUserSelect} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
