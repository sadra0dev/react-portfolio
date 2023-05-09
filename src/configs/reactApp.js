import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

export function reactApp(component) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>{component}</StrictMode>
  );
}
