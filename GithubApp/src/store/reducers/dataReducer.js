import {INPUTCHANGED, SEARCHİNGUSER, SEARCHİNGUSERFAIL, SEARCHİNGUSERSUCCESS} from'../actions/types'
const INITIAL_STATE = {
    data: '',
    search: '',
    status: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUTCHANGED:
            return {...state, search: action.payload}
        case SEARCHİNGUSER:
            return{...state, status: 'aranıyor...'}
        case SEARCHİNGUSERSUCCESS:
            return {...state, data: action.payload}
        case SEARCHİNGUSERFAIL:
            return {...state, status: 'FAIL'}
        default:
            return state;
    }
};