import React, { useState } from 'react';
import { Button } from '@mui/material';
import AuthDialogueBox from './AuthDialogueBox';

const AuthContainer = () => {
    const [isDialogueOpen, setIsDialogueOpen] = useState(false);

    const handleDialogueOpen = () => {
        setIsDialogueOpen(true);
    };

    const handleDialogueClose = () => {
        setIsDialogueOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                onClick={handleDialogueOpen}
                className="rounded-full bg-white text-black hover:bg-slate-300 h-10 mt-2 ml-2"
            >
                Sign In
            </Button>
            {isDialogueOpen && <AuthDialogueBox onClose={handleDialogueClose} />}
        </>
    );
};

export default AuthContainer;
