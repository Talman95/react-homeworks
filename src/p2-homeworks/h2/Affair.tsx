import React from 'react'
import {AffairType} from "./HW2";
import cl from './Affairs.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import themeStyle from '../h12/HW12.module.css';
import {ThemeTypes} from "../h12/bll/themeReducer";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
    id: number
    theme: ThemeTypes
}

function Affair({theme, ...props}: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id);
    }// need to fix

    return (
        <div className={cl.container}>
            <div className={cl.name}>
                {props.affair.name}
            </div>
            <div className={cl.priority}>
                [{props.affair.priority}]
            </div>
            <div className={cl.delete}>
                <SuperButton onClick={deleteCallback} className={themeStyle[theme + '-button']}>X</SuperButton>
            </div>
        </div>
    )
}

export default Affair
