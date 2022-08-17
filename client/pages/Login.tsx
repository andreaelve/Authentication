import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                navigate('/');
            } else {
            }
        });
    }, [auth]);

    const handleLogin = (e: React.FormEvent<HTMLInputElement>|React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        signInWithEmailAndPassword(auth, email!, password!)
        .then((userCredential) => {
            console.log('signing in');
            const user = userCredential.user;
            console.log('logger inn:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return (
        <main>
            <h1>Welcome back!</h1>
            <p>Please enter your details.</p>
            <div className="card">
                <form>
                    <input ref={emailRef} type="text" id="email" placeholder="e-mail"></input>
                    <input ref={passwordRef} type="password" id="password" placeholder="password"></input>
                    <button className="login-btn" onClick={handleLogin}>Log in</button>
                    <span>--------- or ---------</span>
                    <button>Log in with Google (not working)</button>
                </form>
            </div>
            <p className="toggle-link-line">Don't have an account yet? <Link to="/signin">Sign up</Link></p>
        </main>
    );
};

export default Login;