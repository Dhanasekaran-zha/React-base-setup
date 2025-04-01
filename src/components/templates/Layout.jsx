import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={'w-screen min-h-screen'}>
            <Outlet/>
        </div>
    )
}
