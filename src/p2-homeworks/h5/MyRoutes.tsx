import React from 'react'
import {Navigate, Routes, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function MyRoutes() {
    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}

                <Route path={'/react-homeworks'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default MyRoutes
