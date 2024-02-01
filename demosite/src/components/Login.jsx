import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { db } from '../Services/Fireb-config'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate , Link} from 'react-router-dom';





const theme = createTheme();


export default function Login({ authenticate }) {
    const Navigate = useNavigate()
    const [error, seterror] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        data.get('phonenumber').trim().length && data.get('password').trim().length > 0 ?
            getDataUserData(data) : alert("Fields cant be empty")
    }


    const getDataUserData = async (data) => {
        let phNUm = data.get('phonenumber')
        let psWord = data.get('password')
        const q = query(collection(db, "userinfo"), where("phonenumber", "==", phNUm), where("password", "==", psWord));

        const querySnapshot = await getDocs(q);
        console.log("query", querySnapshot);
        if (querySnapshot?.docs.length > 0) {
            console.log("log in");
            authenticate()
            Navigate('/home')
        }
        else {
            seterror(true)
            return (<>
            </>)
        }
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
                        Login
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    type="Number"
                                    name="phonenumber"
                                    required
                                    fullWidth
                                    id="phonenumber"
                                    label="Phone Number"
                                    autoComplete="off"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    type="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
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
                            Login
                        </Button>
                        <Grid container justifyContent="flex-end">
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/signup" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        <div id="recaptcha-container"></div>
        {error === true && (<><Alert severity="error">
            <AlertTitle>You don't have account</AlertTitle>
            Need account? <strong onClick={() => { Navigate('/signup') }}>Signup here!</strong>
        </Alert></>)}
    </>
    );
}