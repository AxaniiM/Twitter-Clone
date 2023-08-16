import {
  Button,
  TextField,
  Link,
  Grid,
  Box,
} from '@mui/material'
import axios from 'axios';
import { setUsername, setToken } from '@/app/store/slices/authSlice';
import { useDispatch } from 'react-redux';

interface SignInProps {
  onSwitchToSignUp: () => void;
  onClose: () => void;
}

export const SignInForm: React.FC<SignInProps> = ({ onSwitchToSignUp, onClose }) => {

  const dispatch = useDispatch()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const signInData = {
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    };
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const { data } = await axios.post("http://localhost:8000/auth/signin/", signInData, config);
      dispatch(setUsername(data.user.username));
      dispatch(setToken(data.token));

      console.log(data.token, data.user.username);
      
      localStorage.setItem('jwtToken', data.token);
      localStorage.setItem('id', data.user.id);
      localStorage.setItem('username', data.user.username)
      console.log("Success", data)
    } catch (error) {
      console.error('Error:', error);
      throw new Error("Failed to sign in. Check your credentials.");
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
      <h1 className='text-2xl'>Sign In to Twitter</h1>
      <form noValidate onSubmit={handleSubmit}>
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            autoComplete="username"
            autoFocus
            label="Username"
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
              <span onClick={onSwitchToSignUp} className="cursor-pointer"> Don&apos;t have an account?Sign up</span>
            </Grid>
          </Grid>
        </>
      </form>
    </Box>

  )
}

export default SignInForm;
