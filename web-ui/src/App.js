import {Route, Switch} from "react-router";
import Home from "./component/Home";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./component/error/NotFound";
import KnightTour from "./component/games/KnightTour";
import React from "react";
import Sudoku from "./component/games/Sudoku";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/sudoku"} component={Sudoku}/>
                    <Route exact path={"/knight-tour"} component={KnightTour}/>
                    <Route path="/" component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
