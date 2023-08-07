
import { UPDATE_SIGNIN_FORM_DATA } from '../actions/signInActions';
import FormState from '../profile/interfaces/signUpInterface';

const initialState = {
  formData: null, // Initial state for the form data
};

type SignInAction = {
    type: string;
    payload: FormState; // Assuming FormState is the type for signUp form data
  };

const signInReducer = (state = initialState, action: SignInAction) => {
  switch (action.type) {
    case UPDATE_SIGNIN_FORM_DATA:
      return {
        ...state,
        formData: action.payload, // Update the state with the received form data
      };
    default:
      return state;
  }
};

export default signInReducer;