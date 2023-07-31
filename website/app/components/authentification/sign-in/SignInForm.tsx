import {
  Button,
  TextField,
  Link,
  Grid,
  Box,
} from '@mui/material'
import { useDispatch } from 'react-redux';
import { updateSignInFormData } from '@/app/actions/signInActions';

interface SignInProps {
  onSwitchToSignUp: () => void;
  onClose: () => void;
}

export const SignInForm: React.FC<SignInProps> = ({ onSwitchToSignUp, onClose }) => {

  const dispatch = useDispatch()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('http://localhost:8000/auth/login/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to sign in');
      }

      const data = await response.json();
      dispatch(updateSignInFormData(data.formData));
      console.log('Success!', data);
    } catch (error) {
      console.error('Error:', error);
    }

    onClose();
  };

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
      <form noValidate onSubmit={handleSubmit}>
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
      </form>
    </Box>

  )
}

export default SignInForm;
