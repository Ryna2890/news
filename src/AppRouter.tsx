import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {Main} from "./component /Main/Main";
import {News} from "./component /News/News";
import {Help} from "./component /Help/Help";
import {SiteMap} from "./component /SiteMap/SiteMap";
import {Settings} from "./component /Settings/Settings";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Main/>
            },

            {
                path: "news",
                element: <News/>
            },
            {
                path: "help",
                element: <Help/>
            },
            {
                path: "map",
                element: <SiteMap/>
            },
            {
                path: "settings",
                element: <Settings/>
            }
        ],
    },
]);


export default AppRouter