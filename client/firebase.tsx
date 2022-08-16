import env from "react-dotenv";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: env.REACT_APP_APIKEY,
  authDomain: env.REACT_APP_AUTHDOMAIN,
  projectId: env.REACT_APP_APIKEY_PROJECTID,
  storageBucket: env.REACT_APP_APIKEY_STORAGEBUCKET,
  messagingSenderId: env.REACT_APP_APIKEY_MESSAGINGSENDERID,
  appId: env.REACT_APP_APIKEY_APPID,
  measurementId: env.REACT_APP_APIKEY_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
