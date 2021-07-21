import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import NewRentalForm from "./components/NewRentalFormPage";
import RentalPage from "./components/RentalPage";
import EditRentalForm from "./components/EditRentalFormPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/rentals/new" exact>
          <NewRentalForm />
        </Route>
        <Route path="/rentals/:id" exact>
          <RentalPage />
        </Route>
        <Route path="/rentals/:id/edit">
          <EditRentalForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;