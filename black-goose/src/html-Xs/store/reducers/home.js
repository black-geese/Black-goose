import { CHANGE_INPUT } from '../actionTypes/home.js';
const defaultState = {
    inputValue: '',
    searchList: "",
    historyList: [],
}
export default (state = defaultState, action) => {
            let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        case 'pushSearchList':
            newState.searchList = action.value
            if(action.value===[]){
                newState.searchList= ""
            }
            return newState
        case 'pushhistory':
            const item = newState.searchList.find((item, index) => {
                if (index === action.index) {
                    return item
                }
            })
            newState.historyList.push(item)
            newState.inputValue=''
            return newState
        case 'qingKong':
            newState.historyList=[]
            return newState
        default:
            return state
    }
}