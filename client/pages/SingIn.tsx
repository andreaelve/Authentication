import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn: React.FC = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const navigate = useNavigate();

    const name = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const password1Ref = useRef<HTMLInputElement>(null);
    const password2Ref = useRef<HTMLInputElement>(null);

    const validateEmailInput = (emailInput: string) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.toLowerCase());
    };

    const validatePasswordInput = (pass1: string, pass2: string) => {
        if(pass1.length < 1) return false;
        return pass1 === pass2;
    }

    const handleSignUp = (e: React.FormEvent<HTMLInputElement>|React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        const password1 = password1Ref.current?.value;
        const password2 = password2Ref.current?.value;

        const isEmail = email ? validateEmailInput(email) : false;
        const correctPassword = password1 && password2 ? validatePasswordInput(password1, password2) : false;
        
        if(!isEmail){
            emailRef.current!.value = "";
            emailRef.current!.placeholder = "Invalid e-mail";
        } else if(!password1){
            password1Ref.current!.placeholder = "Pleace enter a password";
        } else if(!password2) {
            password2Ref.current!.placeholder = "Pleace enter a password";
        } else if(!correctPassword){
            password2Ref.current!.value = "";
            password2Ref.current!.placeholder = "Password does not match";
        }

        if(isEmail && correctPassword) {
            console.log('tiptop');
            createUserWithEmailAndPassword(auth, email!, password1!)
                .then((userCredential) => {
                    console.log('signed up')
                    const user = userCredential.user;
                    console.log('user', user);
                    navigate('/');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
    }

    const handleGoogleLogin = (e: React.FormEvent<HTMLInputElement>|React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('logger inn')
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if(credential != null){
                const token = credential.accessToken;
                const user = result.user;
            }
            // ...
        }).catch((error) => {
            console.log('feil')
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    return (
            <main>
                <h1>Create an account</h1>
                <p className="details">Please enter your details.</p>
                <div className="card">
                    <form>
                        <input ref={name} type="text" id="name" placeholder="name"></input>
                        <input ref={emailRef} type="text" id="email" placeholder="e-mail"></input>
                        <input ref={password1Ref} type="password" id="password1" placeholder="password"></input>
                        <input ref={password2Ref} type="password" id="password2" placeholder="verify password"></input>
                        <span>--------- or ---------</span>
                        <button className="login-with-google-btn" onClick={handleGoogleLogin}>Sign up with google</button>
                    </form>
                </div>
                <p className="toggle-link-line">Already have an account? <Link to="/login">Log in</Link></p>
            </main>
        );
    };
    export default SignIn;
