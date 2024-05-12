import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import Global from "./styles/global.ts";
import "bootstrap/dist/css/bootstrap.min.css";
import { httpHost } from "./utils/enums.ts";

console.log(httpHost.REACT_APP_API_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Global />
    </BrowserRouter>
  </Provider>,
);
