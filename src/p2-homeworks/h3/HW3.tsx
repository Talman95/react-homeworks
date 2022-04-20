import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemeTypes} from "../h12/bll/themeReducer";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any
    const theme = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    const addUserCallback = (name: string) => { // need to fix any
        let newUser = {_id: v1(), name: name};
        setUsers([...users, newUser]); // need to fix
    }

    return (
        <div>
            <hr/>
            <span className={'spanTitle'}>homeworks 3</span>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback} theme={theme}/>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW3
