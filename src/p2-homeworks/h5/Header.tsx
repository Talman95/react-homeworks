import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css';
import {PATH} from "./MyRoutes";

function Header() {
    return (
        <div className={s.menu}>
            <input type="checkbox" id="hmt" className={s.hidden_menu_ticker}/>

            <label className={s.btn_menu} htmlFor="hmt">
                <span className={s.first}></span>
                <span className={s.second}></span>
                <span className={s.third}></span>
            </label>

            <ul className={s.hidden_menu}>
                <li>
                    <NavLink to={PATH.PRE_JUNIOR} className={s.item}>Pre-Junior</NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR} className={s.item}>Junior</NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR_PLUS} className={s.item}>Junior Plus</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default Header
