import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css';

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
                    <NavLink to={'/pre-junior'} className={s.item}>PreJunior</NavLink>
                </li>
                <li>
                    <NavLink to={'/junior'} className={s.item}>Junior</NavLink>
                </li>
                <li>
                    <NavLink to={'/junior-plus'} className={s.item}>JuniorPlus</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default Header
