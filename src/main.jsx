import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>
);
