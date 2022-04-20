import React, {useState} from 'react'
import {checkPeopleAC, homeWorkReducer, sortPeopleAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import themeStyle from "../h12/HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemeTypes} from "../h12/bll/themeReducer";

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any
    const theme = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <tr key={p._id}>
            <td>{p.name}</td>
            <td>{p.age}</td>
        </tr>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortPeopleAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortPeopleAC('down')))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkPeopleAC(18)))

    return (
        <div>
            <hr/>
            <span className={'spanTitle'}>homeworks 8</span>

            {/*should work (должно работать)*/}
            <table>
                <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                </tr>
                {finalPeople}
            </table>

            <div style={{display: 'flex', marginRight: '5px'}}>
                <SuperButton onClick={sortUp} className={themeStyle[theme + '-button']}>sort up</SuperButton>
                <SuperButton onClick={sortDown} className={themeStyle[theme + '-button']}>sort down</SuperButton>
                <SuperButton onClick={checkAge} className={themeStyle[theme + '-button']}>check 18</SuperButton>
            </div>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW8
