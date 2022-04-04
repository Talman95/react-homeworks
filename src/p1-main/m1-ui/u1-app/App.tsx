import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import themeStyle from '../../../p2-homeworks/h12/HW12.module.css';
import { useSelector } from 'react-redux';
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";
import {ThemeTypes} from "../../../p2-homeworks/h12/bll/themeReducer";

function App() {
    const theme = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    return (
        <div className={s.app}>
            <div className={`${s.header} ${themeStyle[theme]} ${themeStyle[[theme] + '-text']}`}>
                <p className={s.headerTitle}>React Homeworks:</p>
            </div>
            <div className={s.content}>
                <HW5/>
            </div>

        </div>
    )
}

export default App
