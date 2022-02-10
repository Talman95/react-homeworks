import React from 'react'
import Header from './Header'
import MyRoutes from "./MyRoutes";
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <BrowserRouter>
                <Header/>
                <MyRoutes/>
            </BrowserRouter>
        </div>
    )
}

export default HW5
