import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../Services/Fireb-config'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from  'react-router-dom'


const theme = createTheme();

export default function SignUp() {
    const Navigate = useNavigate()
    const otpverification = async(event, data) => {

        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

        const phoneNumberval = "+91" + data.get('phonenumber')
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumberval, appVerifier)
            .then((confirmationResult) => {
                const code = prompt("Enter the otp")
                confirmationResult.confirm(code).then(async(result) => {
                    // User signed in successfully.
                    await adduser(event,data)
                    
                    const user = result.user;
                    console.log(user, "user");
                    // ...
                }).catch((error) => {
                    alert(error)
                });
                console.log(confirmationResult, "confirmationResult");
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                console.log(error);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        data.get('firstName').trim().length && data.get('lastName').trim().length && data.get('email').trim().length && data.get('password').trim().length && data.get('phonenumber').trim().length && data.get('department').trim().length > 0 ?
        otpverification(event, data) : alert("Fields cant be empty")
    };

    const adduser = async (event,data) => {
       
        const useref = collection(db, "userinfo")
    
            await addDoc(useref, {
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                email: data.get('email'),
                password: data.get('password'),
                phonenumber: data.get('phonenumber'),
                department: data.get('department')
            }) 
            Navigate('/home')

    }

    return (<>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoComplete="off"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phonenumber"
                                    label="Phone-Number"
                                    name="phonenumber"
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="department"
                                    label="Department"
                                    name="department"
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <div id="recaptcha-container"></div>
                        <Grid container justifyContent="flex-end">
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    </>);
}