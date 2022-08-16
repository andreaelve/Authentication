import React from "react";
import Login from "./pages/Login";
import SignIn from "./pages/Singin";
import Home from "./pages/Home";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { config } from "./config/firebase";
import AuthRoute from "./components/AuthRoute";

initializeApp(config.firebaseConfig);

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <AuthRoute>
                            <Home />
                        </AuthRoute>
                    } 
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;