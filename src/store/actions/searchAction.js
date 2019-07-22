import {
  INPUTCHANGED,
  SEARCHİNGUSER,
  SEARCHİNGUSERSUCCESS,
  SEARCHİNGUSERFAIL,
  GETREPO,
  REPOSUCCESS,
  REPOCOMMIT,
  REPOCOMMITSUCCESS,
  COMMITDETAIL,
  FILENAMES
} from "./types";
import { Actions } from "react-native-router-flux";

export const searchAction = text => {
  return {
    type: INPUTCHANGED,
    payload: text
  };
};

export const searchUser = userName => {
  const client_secret = "8594b97a6ba5f9617da9be4623a128aeb6b43134";
  const client_id = "Iv1.75dcfe4a38b2b64e";
  return dispatch => {
    dispatch({ type: SEARCHİNGUSER });

    fetch(
      `https://api.github.com/users/${userName}?client_id=${client_id}&client_secret=${client_secret}`,
      {}
    )
      .then(res => res.json())
      .then(resJson => {
        searchUserSuccess(dispatch, resJson);
      })
      .catch(searchUserFail(dispatch));
  };
};

export const getRepos = url => {
  return dispatch => {
    dispatch({ type: GETREPO });

    fetch(url, {})
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        getRepoSucces(dispatch, resJson);
      })
      .catch(searchUserFail(dispatch));
  };
};

export const getRepoCommit = (owner, name) => {
  return dispatch => {
    dispatch({ type: REPOCOMMIT });

    fetch(`https://api.github.com/repos/${owner}/${name}/commits`, {})
      .then(res => res.json())
      .then(resJson => {
        getRepoCommitSuccess(dispatch, resJson);
      })
      .catch(err => console.log(err));
  };
};

export const getCommitDetails = url => {
  return dispatch => {
    dispatch({ type: COMMITDETAIL });

    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        getCommitDetailsSuccess(dispatch, resJson);
      })
      .catch(err => console.log(err));
  };
};

const getCommitDetailsSuccess = (dispatch, data) => {
  dispatch({ type: FILENAMES, payload: data });
};

const getRepoCommitSuccess = (dispatch, data) => {
  dispatch({ type: REPOCOMMITSUCCESS, payload: data });
};

const getRepoSucces = (dispatch, data) => {
  dispatch({ type: REPOSUCCESS, payload: data });
};

const searchUserSuccess = (dispatch, data) => {
  dispatch({ type: SEARCHİNGUSERSUCCESS, payload: data });
  Actions.User({ data: data });
};
const searchUserFail = dispatch => {
  dispatch({ type: SEARCHİNGUSERFAIL });
};
