import FormState from "@/app/interfaces/signUpInterface";

export const UPDATE_SIGNIN_FORM_DATA = 'UPDATE_SIGNIN_FORM_DATA';

interface UpdateSignInFormDataAction {
  type: typeof UPDATE_SIGNIN_FORM_DATA;
  payload: FormState | null;
}

export type SignInActionTypes = UpdateSignInFormDataAction