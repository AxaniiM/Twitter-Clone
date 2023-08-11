import React from 'react';
import { useDispatch } from 'react-redux';
import AuthDialogueBox from './AuthDialogueBox';
import { toggleShowSignIn } from '@/app/store/slices/authSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectAuthToken, selectShowSignIn } from '@/app/store/selectors/authSelectors';

const AuthContainer = () => {
    const token = useSelector(selectAuthToken)
    const dispatch = useDispatch()
    const signInState = useSelector(selectShowSignIn)

    const handleDialogueClose = () => {
        dispatch(toggleShowSignIn())
    };

    return (
        <>
            {signInState && <AuthDialogueBox onClose={handleDialogueClose} />}
        </>
    );
};

export default AuthContainer;
