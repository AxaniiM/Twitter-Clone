import FormState from "../interfaces/signUpInterface";
// Define the action type
type SignUpAction = {
  type: string;
  payload: FormState; // Assuming FormState is the type for signUp form data
};

// Define the initial state
const initialSignUpState: FormState = {
username: "",
  password: "",
};

// Define the signUpReducer
const signUpReducer = (state: FormState = initialSignUpState, action: SignUpAction): FormState => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM_DATA":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
