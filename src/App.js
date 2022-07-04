import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, SignUp, Auth } from "./Authentication";
import { Home } from "./Containers";

import { UserContextProvider } from "./Contexts";

const App = () => {
  return (
    <StrictMode>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
