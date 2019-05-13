import {INPUTCHANGED, SEARCHİNGUSER, SEARCHİNGUSERSUCCESS, SEARCHİNGUSERFAIL} from './types'

export const searchAction = (text) =>{
    return{
        type: INPUTCHANGED,
        payload: text
    }
}

export const searchUser = (userName) => {
    const client_secret = '8594b97a6ba5f9617da9be4623a128aeb6b43134'
    const client_id = 'Iv1.75dcfe4a38b2b64e'
    return (dispatch) =>{
        dispatch({type: SEARCHİNGUSER})

        fetch(`https://api.github.com/users/${userName}?client_id=${client_id}&client_secret=${client_secret}`,{
        })
        .then((res) => res.json())
        .then((resJson) =>{
            searchUserSuccess(dispatch, resJson)
        })
        .catch(searchUserFail(dispatch))
    }
}

const searchUserSuccess = (dispatch, data) => {
    dispatch({ type: SEARCHİNGUSERSUCCESS, payload: data})
}
const searchUserFail = (dispatch) => {
    dispatch({type: SEARCHİNGUSERFAIL})
}