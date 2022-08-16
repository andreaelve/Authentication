import React from "react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
    return (
    <>
        <h1>TypeScript is awesome</h1>
        <nav>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/signin">Signin</Link>
        </nav>
    </>
    )
};

export default App;