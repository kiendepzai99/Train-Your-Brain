import React from "react";
import {Redirect, Route} from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import authService from "../../service/AuthService";

const PrivateRoute = ({component: Component, ...rest}) => {

    const [isAuthenticated, setAuthenticated] = React.useState(false);
    const [user, setUser] = React.useState(null);

    const [isLoading, setLoading] = React.useState(true);

    // Run only one after init render.
    React.useEffect(() => {
        // const loggedIn = localStorageHelper.getCookie("loggedIn");
        // if (!loggedIn) {
        //     setLoading(false);
        //     return;
        // }
        authService.validateUser()
            .then(res => {
                console.log(res);
                setAuthenticated(true);
                setUser(res.data);
            })
            .catch((error) => {
                console.log(error.response);
            }).finally(() => {
            setLoading(false);
        });
    }, []);

    const updateUser = (user) => {
        setUser(user);
    };

    if (isLoading) return <LoadingIndicator/>;

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ?
                    <Component {...rest} {...props} user={user} updateUser={updateUser}/>
                    :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}
                    />
            }
        />
    );
};

export default PrivateRoute;