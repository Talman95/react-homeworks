import {UserType} from "../HW8";

const SORT_PEOPLE = 'SORT_PEOPLE'
const CHECK_PEOPLE = 'CHECK_PEOPLE'

export const homeWorkReducer = (state: UserType[], action: HomeWorkActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case SORT_PEOPLE: {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case CHECK_PEOPLE: {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}

type HomeWorkActionType = ReturnType<typeof sortPeopleAC> | ReturnType<typeof checkPeopleAC>

export const sortPeopleAC = (payload: string) => ({type: SORT_PEOPLE, payload} as const)
export const checkPeopleAC = (payload: number) => ({type: CHECK_PEOPLE, payload} as const)