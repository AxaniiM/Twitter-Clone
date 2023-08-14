import { UPDATE_SIGNIN_FORM_DATA,  SignInActionTypes } from '../signIn/types';
import FormState from '../../interfaces/signUpInterface';

export const updateSignInFormData = (formData: FormState | null): SignInActionTypes => ({
  type: UPDATE_SIGNIN_FORM_DATA,
  payload: formData,
});