import React from "react";
import NavBar from "./components/NavBar";
import Crud from "./components/Crud";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
