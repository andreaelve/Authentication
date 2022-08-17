import { getAuth, deleteUser } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut();
        navigate('/');
    }

    const handleDelete = () => {
        const user = auth.currentUser;
        if(user){
            deleteUser(user)
            .then(() => {
                // User deleted.
            })
            .catch((error) => {
                // An error ocurred
                // ...
            });
        } 
    }

    return (
        <main>
            <h1>Home page!</h1>
            <button onClick={handleLogout}>Log out</button>
            <button onClick={handleDelete}>Delete account</button>
        </main>
    )
}

export default Home;