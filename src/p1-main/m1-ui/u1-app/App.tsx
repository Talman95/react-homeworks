import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";

function App() {
    return (
        <div className={s.app}>
            <div className={s.header}>
                <p className={s.headerTitle}>React Homeworks:</p>
            </div>
            <div className={s.content}>
                <HW5/>
            </div>

        </div>
    )
}

export default App
