import { RootState } from "../store";
export interface UsernameAuth {
    username: string
}
export interface TokenAuth {
    token: string
}

export const selectAuthUser = (state: UsernameAuth) => state.username;
export const selectAuthToken = (state: TokenAuth) => state.token;
export const selectShowSignIn = (state: RootState) => state.auth.showSignIn;
