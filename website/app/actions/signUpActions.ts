import FormState from "../interfaces/signUpInterface";

// Define the action type
export const UPDATE_SIGNUP_FORM_DATA = "UPDATE_SIGNUP_FORM_DATA";

// Action creator for updating signUp form data
export const updateSignUpFormData = (formData: FormState) => {
  return {
    type: UPDATE_SIGNUP_FORM_DATA,
    payload: formData,
  };
};