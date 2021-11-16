import { Redirect, Route } from "react-router";

import { useSelector } from 'react-redux'
import { selectIsLogged } from '../core/selectors'

export const PublicRoute = ({component: Component, ...rest}) => {

    const isLogged = useSelector(selectIsLogged)

    return (
        <Route {...rest} render={props => (
            isLogged ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};