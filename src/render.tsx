import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {state} from "./redux/state";
import {RootStateType} from "./redux/state";
export let render = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>
        , document.getElementById('root') as HTMLElement
    )
}
