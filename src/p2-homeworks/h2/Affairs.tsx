import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import cl from './Affairs.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {ThemeTypes} from "../h12/bll/themeReducer";
import themeStyle from "../h12/HW12.module.css";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    theme: ThemeTypes
}

function Affairs({theme, ...props}: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            id={a._id}
            theme={theme}
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
                <SuperButton onClick={setAll} className={themeStyle[theme + '-button']}>All</SuperButton>
                <SuperButton onClick={setHigh} className={themeStyle[theme + '-button']}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={themeStyle[theme + '-button']}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={themeStyle[theme + '-button']}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
