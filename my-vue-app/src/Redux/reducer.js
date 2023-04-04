import {
  GET_VACANT,
  GET_DETAILS,
  GET_USERS,
  GET_USER_BY_ID,
  CREATE_USER,
  LOGIN,
  //TYPE_USER_VERIFIED
  CREATE_VACANT,
  //LOGIN
} from "../Redux/actions";

const initialState = {
  vacants: [],
  vacantDetail: {},
  empresas: [],
  users: [],
  filteredUsers: [],
  userDetail: [],
  userVerified:{},
  //typeUserVerified:0
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VACANT:
      return {
        ...state,
        vacants: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        vacantDetail: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        userDetail: action.payload,
      };
    case CREATE_USER:
       return{
        ...state,
        userVerified:action.payload
      };
    case CREATE_VACANT:
      return{
        ...state,
        vacants:action.payload
      };  
    case LOGIN:
      return{
        ...state,
        userVerified:action.payload,
      }
    /* case TYPE_USER_VERIFIED:
      return{
        ...state,
        typeUserVerified:action.payload.user.roleId
      } */
    default:
      return { ...state };
  }
};

export default rootReducer;
