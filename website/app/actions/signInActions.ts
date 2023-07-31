import FormState from "../interfaces/signUpInterface";

// Define the action type
export const UPDATE_SIGNIN_FORM_DATA = "UPDATE_SIGNIN_FORM_DATA";

// Action creator for updating signUp form data
export const updateSignInFormData = (formData: FormState) => {
  return {
    type: UPDATE_SIGNIN_FORM_DATA,
    payload: formData,
  };
};
