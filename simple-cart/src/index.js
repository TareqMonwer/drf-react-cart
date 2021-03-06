import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Counters from "./components/counters";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
