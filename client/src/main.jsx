import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Toaster } from "./components/ui/toaster.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PayPalScriptProvider
        options={{
          "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "sb",
          currency: "USD",
          intent: "capture",
          "data-sdk-integration-source": "react-paypal-js",
        }}
      >
        <App />
      </PayPalScriptProvider>
      <Toaster />
    </Provider>
  </BrowserRouter>
);
