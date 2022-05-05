import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (event: Event, newValue: number | number[], activeThumb: number) => void
    inputValues: [number, number]
    // min, max, step, disable, ...
}
//
// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
//     {
//         onChangeRange, value,
//         // min, max, step, disable, ...
//     }
// ) => {
//     // сделать самому, можно подключать библиотеки
//
//     return (
//         <>
//             DoubleRange
//         </>
//     )
// }
//
//


function valuetext(value: number) {
    return `${value}%`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props) => {
    const [value, setValue] = React.useState<number[]>(props.inputValues);

    // const handleChange = (
    //     event: Event,
    //     newValue: number | number[],
    //     activeThumb: number,
    // ) => {
    //     if (!Array.isArray(newValue)) {
    //         return;
    //     }
    //
    //     if (activeThumb === 0) {
    //         setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    //     } else {
    //         setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    //     }
    // };

    return (
        <Box sx={{width: 300, display: 'flex'}}>
            <Slider
                // getAriaLabel={() => 'Minimum distance'}
                value={props.inputValues}
                onChange={props.onChangeRange}
                valueLabelDisplay={"auto"}
                getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    );
}

export default SuperDoubleRange
