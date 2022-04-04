import * as api from '../api';
import { FETCH_APP, FETCH_DOCS } from '../constants/items';

export const fetchAppointments = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type : FETCH_APP, data })
    console.log('dispatched');
    history('/');
  } catch (error) {
    console.log(error);
  }
}
export const fetchDoctors = () => async (dispatch) => {
  try {
    const { data } = await api.fetchDoctors();
    dispatch({ type : FETCH_DOCS, payload : data })
    console.log('dispatched');
  } catch (error) {
    console.log(error);
  }
}

