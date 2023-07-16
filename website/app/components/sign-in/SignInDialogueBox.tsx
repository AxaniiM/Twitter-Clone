import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material';
import SignUp from '../sign-up/SignUpForm';
import Checkbox from '@mui/material';

export const SignInDialogueBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleWindowClose = () => {
    setIsOpen(false);
    setIsSignUp(false);
  };

  const handleSignUpLinkClick = () => {
    setIsSignUp(true);
  };

  const handleSignInLinkClick = () => {
    setIsSignUp(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        className="rounded-full bg-white text-black hover:bg-slate-300"
      >
        Sign In
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          style={{ zIndex: 9999 }}
        >
          <Container
            component="main"
            maxWidth="xs"
            className="border-[0.5px] h-[600px] rounded-xl bg-[#2C3640]"
          >
            <CssBaseline />
            <IconButton
              size="small"
              onClick={handleWindowClose}
              className="rounded-full w-8 float-left text-white hover:bg-slate-600"
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                {isSignUp ? 'Sign up for Twitter' : 'Sign in to Twitter'}
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                {isSignUp ? (
                  <SignUp />
                ) : (
                  <>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      className="rounded-full bg-white text-black hover:bg-slate-300"
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2" onClick={handleSignUpLinkClick}>
                          Don't have an account? Sign up
                        </Link>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Box>
            </Box>
          </Container>
        </div>
      )}
    </div>
  );
};

export default SignInDialogueBox;
