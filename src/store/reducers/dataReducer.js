import {
  INPUTCHANGED,
  SEARCHİNGUSER,
  SEARCHİNGUSERFAIL,
  SEARCHİNGUSERSUCCESS,
  GETREPO,
  REPOSUCCESS,
  REPOCOMMIT,
  REPOCOMMITSUCCESS,
  COMMITDETAIL,
  FILENAMES
} from "../actions/types";

const INITIAL_STATE = {
  data: "",
  repos: "",
  search: "",
  spinner: false,
  commits: "",
  fileNames: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUTCHANGED:
      return { ...state, search: action.payload };
    case SEARCHİNGUSER:
      return { ...state, spinner: true };
    case SEARCHİNGUSERSUCCESS:
      return { ...state, data: action.payload, spinner: false };
    case SEARCHİNGUSERFAIL:
      return { ...state, spinner: false, data: "error" };
    case GETREPO:
      return { ...state, spinner: true };
    case REPOSUCCESS:
      return { ...state, repos: action.payload, spinner: false };
    case REPOCOMMIT:
      return { ...state, spinner: true };
    case REPOCOMMITSUCCESS:
      return { ...state, commits: action.payload, spinner: false };
    case COMMITDETAIL:
      return { ...state, spinner: true };
    case FILENAMES:
      return { ...state, fileNames: action.payload, spinner: false };
    default:
      return state;
  }
};
