import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    return (
        <main>
            <h1>Welcome back!</h1>
            <p>Please enter your details.</p>
            <div className="card">
                <form>
                    <input type="text" id="email" placeholder="e-mail"></input>
                    <input type="password" id="password" placeholder="password"></input>
                    <button className="login-btn">Log in</button>
                    <span>---------or---------</span>
                    <button>Log in with Google</button>
                </form>
            </div>
            <p>Don’t have an account yet? <Link to="/signin">Sign up</Link></p>
        </main>
    );
};

export default Login;