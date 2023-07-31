import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSignUpFormData } from '@/app/actions/signUpActions';
import {
  Button,
  CssBaseline,
  TextField,
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    try {
      const response = await fetch('http://localhost:8000/auth/signup/', {
        method: 'POST',
        body: formData,
      })
      console.log(response)
      if (!response.ok) {
        throw new Error("Failed to sign up. Check all your credentials.")
      }

      const data = await response.json()
      dispatch(updateSignUpFormData(data))
      console.log('Success', data)
    } catch (error) {
      console.log('Error!', error)
    }
    onClose()
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5" className="mt-8 mb-5 text-center">
          Sign up for Twitter
        </Typography>
        <form onSubmit={handleSubmit
        }>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
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
