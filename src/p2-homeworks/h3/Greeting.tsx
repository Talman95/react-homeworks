import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import themeStyle from "../h12/HW12.module.css";
import {ThemeTypes} from "../h12/bll/themeReducer";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnterPress: (e: KeyboardEvent<HTMLInputElement>) => void
    theme: ThemeTypes
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterPress, theme} // деструктуризация пропсов
) => {
    const inputClass = themeStyle[theme + '-input'] // need to fix with (?:)

    return (
        <div className={s.container}>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                className={themeStyle[theme + '-input']}
                onKeyPress={onEnterPress}
                error={error}
            />

            <SuperButton
                onClick={addUser}
                disabled={!name}
                className={themeStyle[theme + '-button']}
            >
                add
            </SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
