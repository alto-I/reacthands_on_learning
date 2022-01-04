import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

type AppProps = {
  item: string;
};

function App({item}: AppProps) {
  return (
    <div>
      <h1>{item}</h1>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App item={1} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
