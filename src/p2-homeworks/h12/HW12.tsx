import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeActionType, ThemeTypes} from "./bll/themeReducer";
import {Dispatch} from "redux";

export const themes = ['dark', 'red', 'some', 'blue'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    const dispatch = useDispatch<Dispatch<ThemeActionType>>()

    const onChangeOption = (theme: ThemeTypes) => {
        dispatch(changeThemeC(theme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={'spanTitle'}>homeworks 12</span>
            <br/>

            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />
            {/*<hr/>*/}
        </div>
    );
}

export default HW12;
