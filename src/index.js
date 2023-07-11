import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ContextProvider} from "./reducer";
import {Timer} from "./Timer";
import {render} from "@testing-library/react";


const App = document.getElementById("app");
render(
    <ContextProvider>
        <Timer/>
    </ContextProvider>,
    App
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
