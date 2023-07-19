import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSignUpFormData } from '@/app/actions/signUpActions';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container
} from "@mui/material";

interface SignUpProps {
  onSwitchToSignIn: () => void;
  onClose: () => void;
}

const SignUpForm: React.FC<SignUpProps> = ({ onSwitchToSignIn, onClose }) => {
  const dispatch = useDispatch();


  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      firstName: (event.target as any).firstName.value,
      lastName: (event.target as any).lastName.value,
      email: (event.target as any).email.value,
      password: (event.target as any).password.value,
    };
    dispatch(updateSignUpFormData(formData));
    onClose()
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5" className="mt-8 mb-5 text-center">
          Sign up for Twitter
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="mt-4 rounded-xl bg-blue-500 hover:bg-blue-600"
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <p className="mt-2">
                Already have an account?{' '}
                <span onClick={onSwitchToSignIn} className="cursor-pointer">
                  Sign in
                </span>
              </p>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};


export default SignUpForm;
