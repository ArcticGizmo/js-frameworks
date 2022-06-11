/* @refresh reload */
import { render } from "solid-js/web";
import { Router, hashIntegration } from "solid-app-router";
import App from "./App";

render(
  () => (
    <Router source={hashIntegration()}>
      <div>This is some stuff</div>
      <App />
    </Router>
  ),
  document.getElementById("root")
);
