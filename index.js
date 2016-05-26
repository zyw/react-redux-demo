import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { Router,Route,Link,browserHistory,IndexRoute } from "react-router";
import App from "./app";
import tipsList from "./reducer/reducers";
import Topics from './component/topics';
import Detail from './component/detail';

const loggerMiddleware = createLogger();

const store = createStore(tipsList,applyMiddleware(thunkMiddleware,loggerMiddleware));

render(
	<Provider store={store}>
		<Router history={ browserHistory }>
			<Route path="/" component={ App }>
				<IndexRoute component={ Topics }/>
				<Route path="/detail/:topicId" component={ Detail }/>
			</Route>
		</Router>
	</Provider>
	,document.getElementById("app"));
