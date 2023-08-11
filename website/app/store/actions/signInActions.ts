

import { UPDATE_SIGNIN_FORM_DATA, TOGGLE_SIGN_IN, SignInActionTypes } from '../signIn/types';
import FormState from '../../interfaces/signUpInterface';

export const updateSignInFormData = (formData: FormState | null): SignInActionTypes => ({
  type: UPDATE_SIGNIN_FORM_DATA,
  payload: formData,
});

export const toggleSignIn = (signIn: boolean): SignInActionTypes => ({
  type: TOGGLE_SIGN_IN,
  payload: signIn,
});
