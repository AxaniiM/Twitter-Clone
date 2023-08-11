import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import SignInForm from './sign-in/SignInForm';
import SignUpForm from './sign-up/SignUpForm';
import theme from '@/app/themes'
import { Twitter } from '@mui/icons-material';

interface AuthDialogueBoxProps {
    onClose: () => void
}

const AuthDialogueBox: React.FC<AuthDialogueBoxProps> = ({ onClose }) => {
    const [signIn, setSignIn] = useState(true);


    const handleSwitchToSignIn = () => {
        setSignIn(true);
    };

    const handleSwitchToSignUp = () => {
        setSignIn(false);
    };




    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100" style={{ zIndex: 9999 }}>
            <Container component="main" maxWidth="xs" className="border-[0.5px] h-[600px] rounded-xl bg-[#2C3640]">
                <CssBaseline />
                <Twitter 
                fontSize='large'
                sx={{
                    marginLeft: "150px",
                    marginTop: "10px",
                }}
                   />
                <ThemeProvider theme={theme}>
                    {signIn ? <SignInForm onSwitchToSignUp={handleSwitchToSignUp} onClose={onClose}/> : <SignUpForm onSwitchToSignIn={handleSwitchToSignIn} onClose={onClose} />}
                </ThemeProvider>
            </Container>
        </div>
    );
};

export default AuthDialogueBox;
