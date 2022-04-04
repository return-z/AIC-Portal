import { AUTH, LOGOUT, FETCH_DOCS } from '../constants/items';

const authReducer = (state = { authData : null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log('storing...')
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      return { ...state, authData : action?.data};
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData : null };
    case FETCH_DOCS:
      return action.payload;
    default:
      return state;
  }
}

export default authReducer;