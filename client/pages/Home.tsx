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
                navigate('/');
            })
            .catch((error) => {
                console.log(error.errorCode, error.errorMessage);
            });
        } 
    }

    return (
        <main>
            <iframe src="https://giphy.com/embed/ASd0Ukj0y3qMM" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-simpsons-hello-hi-ASd0Ukj0y3qMM"></a></p>
            <section className="homepage-buttons">
                <button onClick={handleLogout}>Log out</button>
                <button onClick={handleDelete}>Delete account</button>
            </section>
        </main>
    )
}

export default Home;