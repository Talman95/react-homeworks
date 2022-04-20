export type ThemeTypes = 'some' | 'dark' | 'red' | 'blue'

type ThemeStateType = {
    theme: ThemeTypes
}

const initState: ThemeStateType = {
    theme: 'dark',
};

export const themeReducer = (state = initState, action: ThemeActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.theme
            }
        }
        default:
            return state;
    }
};

export type ThemeActionType = ChangeThemeActionType

type ChangeThemeActionType = {
    type: 'CHANGE_THEME',
    theme: ThemeTypes
}

export const changeThemeC = (theme: ThemeTypes): ChangeThemeActionType => {
    return {
        type: 'CHANGE_THEME', theme
    }
};