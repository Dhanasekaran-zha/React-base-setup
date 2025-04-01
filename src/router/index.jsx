import {Route, Routes} from "react-router-dom";
import NavigationConstants from "../constants/NavigationConstants.js";
import {Home, Login} from "../components/pages/index.js";
import {Layout} from "../components/templates/index.js";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path={NavigationConstants.HOME} element={<Home/>}/>
            </Route>
            <Route path={NavigationConstants.LOGIN} element={<Login/>}/>
        </Routes>
    )
}
