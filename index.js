import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import App from "./app";
import tipsList from "./reducer/reducers";

const loggerMiddleware = createLogger();

const store = createStore(tipsList,applyMiddleware(thunkMiddleware,loggerMiddleware));

render(
	<Provider store={store}>
		<App/>
	</Provider>
	,document.getElementById("app"));