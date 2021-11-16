import { Switch } from "react-router-dom";
import { UserFormLogin } from "../components/userform/UserFormLogin";
import { BuyPage } from "../views/Buy/BuyPage";
import { UserFormRegisterPage } from "../views/Form/UserFormRegisterPage";
import { HomePage } from "../views/Home/HomePage";
import { PlayPage } from "../views/Play/PlayPage";
import { SellPage } from "../views/Sell/SellPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Route } from "react-router";

export const RouterApp = () => {
    return (
        <Switch>
            <PrivateRoute exact component={PlayPage} path="/play" />
            <PrivateRoute exact component={SellPage} path="/sell" />
            <PrivateRoute exact component={BuyPage} path="/buy" />
            <PrivateRoute exact component={HomePage} path="/" />
            <PublicRoute exact component={UserFormLogin} path="/login"/>
            <PublicRoute exact component={UserFormRegisterPage} path="/register"/>
            <Route> 404 Not Found!</Route>
        </Switch>
    );
}