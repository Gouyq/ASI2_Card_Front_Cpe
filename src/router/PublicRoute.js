import { Redirect, Route } from "react-router";
import { isLogin } from "../utils/auth";

export const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};