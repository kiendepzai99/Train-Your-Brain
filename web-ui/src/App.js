import {Route, Switch} from "react-router";
import Home from "./component/Home";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./component/error/NotFound";
import SudokuBox from "./component/games/SudokuBox";
import HorseCheckingBox from "./component/games/HorseCheckingBox";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/sudoku"} component={SudokuBox}/>
                <Route exact path={"/horse-checking"} component={HorseCheckingBox}/>
                <Route path="/" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
