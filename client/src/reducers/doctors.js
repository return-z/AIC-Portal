import { FETCH_DOCS } from '../constants/items'

export default (doctors = [], action) => {
  switch (action.type) {
    case FETCH_DOCS:
      return action.payload;
    default:
      return doctors;
  }
}