import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {Dispatch} from "redux";
import {loadingAC, LoadingActionType} from './bll/loadingReducer';
import settings from '../../images/settings.gif';
import themeStyle from "../h12/HW12.module.css";
import {ThemeTypes} from "../h12/bll/themeReducer";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch<Dispatch<LoadingActionType>>()
    const theme = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2500)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <span className={'spanTitle'}>homeworks 10</span>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={'HW10'}><img src={settings} alt={'loading'}/></div>
                ) : (
                    <div className={'HW10'}>
                        <SuperButton
                            onClick={setLoading}
                            className={themeStyle[theme + '-button']}
                        >set loading...
                        </SuperButton>
                    </div>
                )
            }

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW10
