import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
function App() {
  return (
    <div>
      <Header /> {
        //by placing header outside switch, header gets rendered despite whatever react router dom switch and route decide to render 
      }
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  )
};

export default App;

//prop drilling, react router. dont need to pass in history to child pages.
//solved by using withRouter();