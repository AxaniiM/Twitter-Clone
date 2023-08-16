import { RootState } from "../store";
export interface UsernameAuth {
    auth: {
        username: string
    }

}
export interface TokenAuth {
    token: string
}

export const selectAuthUser = (state: UsernameAuth) => state.auth.username;
export const selectAuthToken = (state: RootState) => state.auth.token;
export const selectShowSignIn = (state: RootState) => state.auth.showSignIn;
