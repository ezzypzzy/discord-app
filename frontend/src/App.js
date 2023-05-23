import React from "react";
// BrowserRouter is a component that uses the HTML5 history API
// (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
// Route: Route allows you to configure different pages to be shown based on the current URL.
// Switch is used to wrap multiple Route components. ===>>> Replaced with Routes in v6
// It will only render the first Route or Redirect that matches the current location.
// ===>>> Redirect is replaced with Navigate in v6
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";

import "./App.css";

function App() {
  /*
  return <>
    <Router>
      <Switch>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/register'>
          <RegisterPage />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/'>
          <Redirect to='/dashboard' />
        </Route>
      </Switch>
    </Router>
  </>
  */
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
