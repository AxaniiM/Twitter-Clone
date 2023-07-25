import { useState } from 'react';
import {
  Button,
  TextField,
  Link,
  Grid,
  Box,
} from '@mui/material'

interface SignInProps {
  onSwitchToSignUp: () => void
}


export const SignInForm: React.FC<SignInProps> = ({ onSwitchToSignUp }) => {

  return (
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='text-2xl'>Sign In to Twiter</h1>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            label="Email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              sx: {
                  "& input": {
                      color: 'gray'
                  }
              }
          }}
          placeholder="Password"
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
              <span onClick={onSwitchToSignUp} className="cursor-pointer"> Don't have an account?Sign up</span>


            </Grid>
          </Grid>
        </>
      </Box>
    </Box>

  )
}

export default SignInForm;
