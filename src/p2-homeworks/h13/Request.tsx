import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {RequestsAPI} from "./RequestsAPI";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemeTypes} from "../h12/bll/themeReducer";
import themeStyle from "../h12/HW12.module.css";

export const Request = () => {
    const [value, setValue] = useState(true)
    const [response, setResponse] = useState('')
    const theme = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    const sendRequest = () => {
        RequestsAPI.sendValue(value)
            .then(res => {
                console.log(res.data)
                setResponse(JSON.stringify(res.data))
            })
            .catch(error => {
                console.log(error.response.data)
                setResponse(JSON.stringify(error.response.data))
            })
    }

    return (
        <div className={'HW13'}>
            <div className={'HW13-onCenter'}>
                <SuperCheckbox checked={value} onChangeChecked={setValue}/>
                <SuperButton onClick={sendRequest} className={themeStyle[theme + '-button']}>
                    Send request
                </SuperButton>
            </div>
            <p>Response: {response}</p>
        </div>
    );
};