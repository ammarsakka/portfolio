import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./assets/store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="bg-slate-50 dark:bg-zinc-800 min-h-screen overflow-hidden font-ubuntu text-black dark:text-white">
                <App />
            </div>
        </Provider>
    </React.StrictMode>
);
