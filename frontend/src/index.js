import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./style/index.css";
import "./style/container.css";
import "./style/recruitTable.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./modules/redux/index";
import { composeWithDevTools  } from 'redux-devtools-extension'

const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
