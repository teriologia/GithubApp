import {INPUTCHANGED, SEARCHİNGUSER, SEARCHİNGUSERFAIL, SEARCHİNGUSERSUCCESS, GETREPO, REPOSUCCESS, REPOCOMMIT, REPOCOMMITSUCCESS, COMMITDETAIL, FILENAMES} from'../actions/types'
const INITIAL_STATE = {
    data: '',
    repos: '',
    search: '',
    status: '',
    commits: '',
    fileNames: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUTCHANGED:
            return {...state, search: action.payload}
        case SEARCHİNGUSER:
            return{...state, status: 'loading'}
        case SEARCHİNGUSERSUCCESS:
            return {...state, data: action.payload}
        case SEARCHİNGUSERFAIL:
            return {...state, status: 'FAIL'}
        case GETREPO:
            return{...state, status: 'loading'}
        case REPOSUCCESS:
            return {...state, repos: action.payload}
        case REPOCOMMIT:
            return{...state, status: 'loading'}
        case REPOCOMMITSUCCESS:
            return{...state, commits: action.payload}
        case COMMITDETAIL:
            return{...state, status: 'laoding'}
        case FILENAMES:
            return { ...state, fileNames: action.payload}
        default:
            return state;
    }
};