import React from "react";
import App from "./App";
import * as ReactDOM from 'react-dom/client';

const container = document.getElementById('app')!;
const root = ReactDOM.createRoot(container);

root.render(
    <App />
);