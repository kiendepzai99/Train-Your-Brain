import {Route, Switch} from "react-router";
import Home from "./component/Home";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./component/error/NotFound";
import KnightTour from "./component/games/KnightTour";
import React from "react";
import Sudoku from "./component/games/Sudoku";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/sudoku"} component={Sudoku}/>
                <Route exact path={"/knight-tour"} component={KnightTour}/>
                <Route path="/" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
