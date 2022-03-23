type LoadingStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}
export type LoadingActionType = {
    type: 'LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => (
    {type: 'LOADING', isLoading}
) // fix any