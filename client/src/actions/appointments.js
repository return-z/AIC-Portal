import * as api from '../api';
import { FETCH_APP } from '../constants/items';

export const fetchAppointments = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type : FETCH_APP, data })
    console.log('dispatched');
    history.push('/');
  } catch (error) {
    console.log(error);
  }
}