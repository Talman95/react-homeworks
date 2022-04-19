import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {RequestsAPI} from "./RequestsAPI";

export const Request = () => {
    const [value, setValue] = useState(true)
    const [response, setResponse] = useState('')

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
            <SuperCheckbox checked={value} onChangeChecked={setValue}/>
            <SuperButton onClick={sendRequest}/>
            <p>Response: {response}</p>
        </div>
    );
};