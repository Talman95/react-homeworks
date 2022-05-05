import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1(Math.min(newValue[0], value2 - 1))
            setValue2(value2)
        } else {
            setValue1(value1)
            setValue2(Math.max(newValue[1], value1 + 1));
        }
    };

    return (
        <div>
            <hr/>
            <span className={'spanTitle'}>homeworks 11</span>

            {/*should work (должно работать)*/}
            <div style={{display: "flex"}}>
                <div style={{width: 25}}>{value1}</div>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display: 'flex', alignItems: "center"}}>
                <span style={{width: 25}}>{value1}</span>
                <SuperDoubleRange
                    inputValues={[value1, value2]}
                    onChangeRange={handleChange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span style={{marginLeft: 5}}>{value2}</span>
            </div>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW11
