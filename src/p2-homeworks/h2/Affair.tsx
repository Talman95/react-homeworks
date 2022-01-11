import React from 'react'
import {DataType} from "./HW2";
import cl from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: DataType
    deleteAffairCallback: (_id: number) => void
    id: number
}

function Affair(props: AffairPropsType) {
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
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
