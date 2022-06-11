/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./App";

render(
  () => (
    <Router>
      <div>This is some stuff</div>
      <App />
    </Router>
  ),
  document.getElementById("root")
);
