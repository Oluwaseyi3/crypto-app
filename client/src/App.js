import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"


import PrivateRoute from "./components/routing/PrivateRoute"

//Screens
import PrivateScreen from "./components/screens/PrivateScreen"
import LoginScreen from "./components/screens/LoginScreen"
import Layout from "./components/screens/Layout"
import RegisterScreen from "./components/screens/RegisterScreen"
import Bitcoin from "./components/screens/Bitcoin"
function App() {
  return (

     
     <Switch>
     <Route exact path="/login" render={() => <LoginScreen/>}/>
     <Route exact path="/register" render={() => <RegisterScreen/>}/>
     <Layout>
     <PrivateRoute exact path="/" component={Bitcoin} />
     </Layout>
     </Switch>
    
     
    
  );
}

export default App;
