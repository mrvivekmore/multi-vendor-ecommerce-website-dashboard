import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { Toaster } from "react-hot-toast";

const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense>
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "#283046",
              color: "#fff",
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
