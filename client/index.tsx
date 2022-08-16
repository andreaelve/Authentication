import React from "react";
import App from "./App";
import Login from "./pages/Login";
import SignIn from "./pages/Singin";
import * as ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const container = document.getElementById('app')!;
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    </BrowserRouter>
);