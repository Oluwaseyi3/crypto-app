 import React, { useState, useEffect } from 'react';
 import styles from "../styles/FormStyles"
 import withStyles from "@material-ui/core/styles/withStyles";
 import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { useHistory} from "react-router-dom"


function RegisterScreen(props) {
    const { classes } = props;
     const [username, setUserName] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [confirmPassword, setConfirmPassword] = useState("")
     const [error, setError] = useState("")

     const history = useHistory();
     useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push("/")
        }
     }, [history])
 
    
     const registerHandler  = async (e) => {
         e.preventDefault();

         const config = {
             header: {
                 "Content-Type": "application/json"
             }
         }

         if(password !== confirmPassword){
             setPassword("")
             setConfirmPassword("")
             setTimeout(() => {
             setError("")
             }, 5000);
             return setPassword("Passwords do not match")
         }

         try {
             const {data} = await axios.post("/api/auth/register", { username, email, password}, config)

             localStorage.setItem("authToken", data.token)
             history.push("/")
         } catch (error) {
             
             setTimeout(() => {
                 setError("")
             }, 5000);
         }
     }
     return (
         <div>
              <main className={classes.main}>
             <Paper className={classes.paper}>
             <Typography variant='h5'>Register</Typography>
               <form className={classes.form} onSubmit={registerHandler} >
                    {error && <span>{error}</span>}
                   <FormControl margin='normal' required fullWidth>
                     <InputLabel htmlFor='username'> Username</InputLabel>
                    <Input id='username' name='username' autoFocus autoComplete="false" 
                     onChange={ e => setUserName(e.target.value)} 
                     />
                     
                   </FormControl>

                   <FormControl margin='normal' required fullWidth>
                     <InputLabel htmlFor='register-email'>Email </InputLabel>
                    <Input id="register-email" name="email" autoFocus autoComplete="false"
                    onChange={ e => setEmail(e.target.value)} 
                    />
                    
                   </FormControl>

                   <FormControl margin='normal' required fullWidth>
                     <InputLabel htmlFor='register-password'>Password </InputLabel>
                        <Input  id='register-password' name='password' type='password' autoFocus
                        onChange={ e => setPassword(e.target.value)} 
                        />
                     
                   </FormControl>

                   <FormControl margin='normal' required fullWidth>
                     <InputLabel htmlFor='register-password'> Confirm Password</InputLabel>
                        <Input type='password' name="password" autoFocus 
                        onChange={ e => setConfirmPassword(e.target.value)} 
                         />
                     
                   </FormControl>
                   <Button
            
                    variant='contained'
                    type='submit'
                    fullWidth
                    color='primary'
                    className={classes.submit}
                    >
              Sign In
            </Button>
               </form>
             </Paper>
             </main>
         </div>
     )
 }

 export default withStyles(styles)(RegisterScreen)
 