import React, { useEffect, useState } from 'react';
import styles from "../styles/FormStyles"
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import axios from "axios"
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper";
import { useHistory} from "react-router-dom"

function LoginScreen(props) {
   const { classes } = props;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const history = useHistory();
    useEffect(() => {
       if (localStorage.getItem("authToken")) {
           history.push("/")
       }
    }, [history])

    const loginHandler  = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        try {
            const {data} = await axios.post("/api/auth/login", { email, password}, config)

            localStorage.setItem("authToken", data.token)
            history.push("/")
        } catch (error) {
            console.log(error);
            setTimeout(() => {
                setError("")
            }, 5000);
        }
    }
    return (
        <div>
             <main className={classes.main}>
            <Paper className={classes.paper}>
            <Typography variant='h5'>Login</Typography>
              <form className={classes.form} onSubmit={loginHandler} >
                   {error && <span>{error}</span>}
                  
                  <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='login-email'>Email </InputLabel>
                   <Input id="login-email" name="email" autoFocus autoComplete="false"
                   onChange={ e => setEmail(e.target.value)} 
                   />
                   
                  </FormControl>

                  <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='login-password'>Password </InputLabel>
                       <Input  id='login-password' name='password' type='password' autoFocus
                       onChange={ e => setPassword(e.target.value)} 
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

export default withStyles(styles)(LoginScreen)
