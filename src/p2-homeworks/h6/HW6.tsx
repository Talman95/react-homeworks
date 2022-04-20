import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemeTypes} from "../h12/bll/themeReducer";
import themeStyle from "../h12/HW12.module.css";

function HW6() {
    const [value, setValue] = useState<string>('')
    const theme = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))
    }

    return (
        <div>
            <hr/>
            <span className={'spanTitle'}>homeworks 6</span>


            {/*should work (должно работать)*/}
            <div style={{paddingBottom:5, }}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                    theme={theme}
                />
            </div>
            <SuperButton onClick={save} className={themeStyle[theme + '-button']}>save</SuperButton>
            <SuperButton onClick={restore} className={themeStyle[theme + '-button']}>restore</SuperButton>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW6
