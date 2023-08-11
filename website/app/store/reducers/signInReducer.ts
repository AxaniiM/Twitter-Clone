import FormState from '../../interfaces/signUpInterface';
import { UPDATE_SIGNIN_FORM_DATA, SignInActionTypes } from "@/app/store/signIn/types"

interface SignInState {
  formData: FormState | null;
}

const initialState: SignInState = {
  formData: null,
};

const signInReducer = (state = initialState, action: SignInActionTypes): SignInState => {
  switch (action.type) {
    case UPDATE_SIGNIN_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default signInReducer;
