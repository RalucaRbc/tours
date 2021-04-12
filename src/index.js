import React from "react";
import { render } from "react-dom";
import "./index.css";
import { App } from "../src/components/App/App.component";

const app = <App />;
const here = document.querySelector("#here");

render(app, here);
