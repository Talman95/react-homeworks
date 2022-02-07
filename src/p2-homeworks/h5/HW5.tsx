import React from 'react'
import Header from './Header'
import MyRoutes from "./MyRoutes";
import {BrowserRouter, HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}
            <BrowserRouter>
                <Header/>

                <MyRoutes/>
            </BrowserRouter>
            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
