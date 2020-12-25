import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage } from "../pages";
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory();



export const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </Router>
    )
}




