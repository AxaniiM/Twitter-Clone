import FormState from "@/app/interfaces/signUpInterface";
// Define the action type
type SignUpAction = {
  type: string;
  payload: FormState; // Assuming FormState is the type for signUp form data
};
interface SignUpState {
  username: string,
  password: string,
}

// Define the initial state
const initialSignUpState: SignUpState = {
username: "",
  password: "",
};

// Define the signUpReducer
const signUpReducer = (state: SignUpState = initialSignUpState, action: SignUpAction): SignUpState => {
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
