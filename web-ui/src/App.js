import {Route, Switch} from "react-router";
import Home from "./component/Home";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./component/error/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/sudoku"} component={Home}/>
                <Route path="/">
                    <NotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
