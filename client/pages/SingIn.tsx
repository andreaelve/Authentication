import React from "react";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
    return (
        <>
            <h1>Create an account</h1>
            <p className="details">Please enter your details.</p>
            <div className="card">
                <form>
                    <input type="text" id="name" placeholder="name"></input>
                    <input type="text" id="email" placeholder="e-mail"></input>
                    <input type="password" id="password1" placeholder="password"></input>
                    <input type="password" id="password2" placeholder="verify password"></input>
                    <button className="signup-btn">Create account</button>
                    <span>---------or---------</span>
                    <button>Sign up with Google</button>
                </form>
            </div>
            <p>Already have an account?<Link to="/login"> Log in</Link></p>
        </>
    );
};

export default SignIn;