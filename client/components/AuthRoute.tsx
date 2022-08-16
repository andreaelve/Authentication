import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
  }

const AuthRoute: React.FC<Props> = props => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        authCheck();
    }, [auth]);

    const authCheck = onAuthStateChanged(auth, (user) => {
        if(user) {
            setLoading(false);
        }
        console.log('unauthorized');
        navigate('/login');
    });

    if(loading) <p>Loading...</p>;

    return <>{children}</>;
}

export default AuthRoute;