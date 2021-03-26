import {Route, Switch} from "react-router";
import Home from "./component/Home";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./component/error/NotFound";
import SudokuBox from "./component/games/SudokuBox";
import KnightTour from "./component/games/KnightTour";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/sudoku"} component={SudokuBox}/>
                <Route exact path={"/knight-tour"} component={KnightTour}/>
                <Route path="/" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
