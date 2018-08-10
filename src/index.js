import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

let element = <h1>hello world</h1>;
console.log(element.props.children);

ReactDOM.render(<Counter />, document.getElementById("root"));
registerServiceWorker();
