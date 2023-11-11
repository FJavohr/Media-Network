import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store, StoreType} from "./redux/state";
export let render = (store:StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store.getState()}/>
        </BrowserRouter>
        , document.getElementById('root') as HTMLElement
    )
}
render(store)

store._state.callbacks.subscribe(() => render(store))