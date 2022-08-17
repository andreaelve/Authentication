import { getAuth } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    console.log('inside');
    const handleLogout = () => {
        auth.signOut();
        navigate('/');
    }

    return (
        <main>
            <h1>Home page!</h1>
            <button onClick={handleLogout}>Log out</button>
            <button>Delete account</button>
        </main>
    )
}

export default Home;