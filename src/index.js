import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globalStyles.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log(store);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
