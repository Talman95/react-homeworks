import React from 'react'
import Affair from './Affair'
import {AffairType, DataType, FilterType} from './HW2'
import cl from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: DataType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            id={a._id}
        />
    ))

    const setAll = () => {
        props.setFilter('all');
    } // need to fix
    const setHigh = () => {
        props.setFilter('high');
    }
    const setMiddle = () => {
        props.setFilter('middle');
    }
    const setLow = () => {
        props.setFilter('low');
    }
    return (
        <div>
            {props.data.length !== 0
                ?
                mappedAffairs
                :
                <p>Not been found</p>
            }

            <div className={cl.controls}>
                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>


        </div>
    )
}

export default Affairs
