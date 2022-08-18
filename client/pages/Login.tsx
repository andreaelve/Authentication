import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login: React.FC = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                navigate('/');
            }
        });
    }, [auth]);

    const handleLogin = (e: React.FormEvent<HTMLInputElement>|React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        signInWithEmailAndPassword(auth, email!, password!)
        .then(userCredential => {
            const user = userCredential.user;
            formRef.current!.className = '';
        })
        .catch(error => { 
            formRef.current!.className = 'wrong-login';
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('code', errorCode, 'Message', errorMessage);
        });
    }

    const handleGoogleLogin = (e: React.FormEvent<HTMLInputElement>|React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if(credential != null){
                const token = credential.accessToken;
                const user = result.user;
            }
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    return (
        <main>
            <h1>Welcome back!</h1>
            <p>Please enter your details.</p>
            <div className="card">
                <form ref={formRef}>
                    <input ref={emailRef} type="text" id="email" placeholder="e-mail"></input>
                    <input className="login-input" ref={passwordRef} type="password" id="password" placeholder="password"></input>
                    <button className="login-btn" onClick={handleLogin}>Log in</button>
                    <span>--------- or ---------</span>
                    <button className="login-with-google-btn" onClick={handleGoogleLogin}>Sign in with google</button>
                </form>
            </div>
            <p className="toggle-link-line">Don't have an account yet? <Link to="/signin">Sign up</Link></p>
        </main>
    );
};

export default Login;