import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import FinalPage from './components/FinalPage/FinalPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';



export const UserContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({})



  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3> Email :  {loggedInUser.email} </h3>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/area/:areaId">
            <Booking />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/finalpage/:areaId">
            <FinalPage />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
