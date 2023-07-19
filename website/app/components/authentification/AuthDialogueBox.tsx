import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Container, CssBaseline, ThemeProvider } from '@mui/material';
import SignInDialogueBox from './sign-in/SignInForm';
import SignUpForm from './sign-up/SignUpForm';
import theme from '@/app/themes'
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_AUTH_DIALOGUE } from '@/app/actions/authDialogueActions';


interface AuthDialogueBoxProps {
    onClose: () => void
}

const AuthDialogueBox: React.FC<AuthDialogueBoxProps> = ({ onClose }) => {
    const [showSignIn, setShowSignIn] = useState(true);
    const dispatch = useDispatch();

    const handleSwitchToSignIn = () => {
        setShowSignIn(true);
    };

    const handleSwitchToSignUp = () => {
        setShowSignIn(false);
    };

  


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 9999 }}>
            <Container component="main" maxWidth="xs" className="border-[0.5px] h-[600px] rounded-xl bg-[#2C3640]">
                <CssBaseline />
                <IconButton size="small" className="rounded-full w-8 float-left text-white hover:bg-slate-600" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                <ThemeProvider theme={theme}>
                    {showSignIn ? <SignInDialogueBox onSwitchToSignUp={handleSwitchToSignUp} /> : <SignUpForm onSwitchToSignIn={handleSwitchToSignIn} onClose={onClose}/>}
                </ThemeProvider>
            </Container>
        </div>
    );
};

export default AuthDialogueBox;
