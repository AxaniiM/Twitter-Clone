'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import AuthDialogueBox from './AuthDialogueBox';
import { toggleShowSignIn } from '@/app/store/slices/authSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectShowSignIn } from '@/app/store/selectors/authSelectors';
import { RootState } from '@/app/store/store';

const AuthContainer = () => {
    const dispatch = useDispatch();
    const signInState = useSelector((state: RootState) => selectShowSignIn(state))// Pass the signInAuth state slice
    const handleDialogueClose = () => {
        dispatch(toggleShowSignIn());
    };
    return (
        <>
            {signInState && <AuthDialogueBox onClose={handleDialogueClose} />}
        </>
    );
};
export default AuthContainer;





