import React from "react";
import ReactDOM from "react-dom/client";
import App from "Containers/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./configureStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
