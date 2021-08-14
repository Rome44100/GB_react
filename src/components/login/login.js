import { Button, Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import React from "react";
import firebase from "firebase";

export default function Login() {
    const [ email, setEmail ] = React.useState('');
    const [ pwd, setPwd ] = React.useState('');
    const [ error, setError ] = React.useState('');
    const [ isSigningUp, setIsSigningUp ] = React.useState(false);

    const handleChangeEmail = e => setEmail(e.target.value);
    const handleChangePwd = e => setPwd(e.target.value);

    const handleIsSignUpChange = (e) => {
        setIsSigningUp(e.target.checked);
    }

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, pwd);
        } catch (er) {
            setError(er.message);
        }
    }

    const handleSignUp = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, pwd);
        } catch (er) {
            setError(er.message);
        }
    }

    const handleSubmit = () => {
        console.log("Click on button email and password! ", { email, pwd });

        if (!email || !pwd) {
            setError('Введите значения полей!');
            return;
        }

        if (isSigningUp) {
            handleSignUp();
            return;
        }

        handleLogin();
    }

    return <>
        <p>Login:</p>
        <div style={{ display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center", 
                      gap: "10px" }}>
            <TextField 
                variant="outlined" 
                placeholder="Email" 
                value={ email } 
                type="email" 
                onChange={ handleChangeEmail } ></TextField>
            <br />
            <TextField 
                variant="outlined" 
                placeholder="Password" 
                value={ pwd } 
                type="text" 
                onChange={ handleChangePwd } ></TextField>
            <br />
            <FormControlLabel 
                control={
                    <Checkbox
                        checked={ isSigningUp }
                        onChange={ handleIsSignUpChange }
                        name="checked"
                        color="primary"
                    />
                }
                label={ <p>Еще нет кабинета?</p> }
            />
            <br />
            <div style={{ color: "red" }}>{ error }</div>
            <br />
            <Button 
                variant="outlined" 
                onClick={ handleSubmit }>
                    { isSigningUp ? "Register" : "Enter" }
            </Button>
        </div>
    </>
}