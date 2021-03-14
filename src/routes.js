import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import LoginPage from './pages/login/loginPage'
import UserLogPage from './pages/userLog/userLogPage'
import RegisterUserP1Page from './pages/registerUserP1/registerUserP1Page'
import RegisterUserP2Page from './pages/registerUserP2/registerUserP2Page'
import RegisterPetP1Page from './pages/registerPetP1/registerPetP1Page'
import RegisterPetP2Page from './pages/registerPetP2/registerPetP2Page'
import PetPage from './pages/pet/petPage'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/registerUserP1" component={RegisterUserP1Page}/>
            <Route exact path="/registerUserP2" component={RegisterUserP2Page}/>
            <Route exact path="/userLog" component={UserLogPage}/>
            <Route exact path="/registerPetP1" component={RegisterPetP1Page}/>
            <Route exact path="/registerPetP2" component={RegisterPetP2Page}/>
            <Route exact path="/pet" component={PetPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;