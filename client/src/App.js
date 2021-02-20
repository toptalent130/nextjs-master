import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
// user case
import PrivateRoute from './components/common/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import ChildNum from './components/exploretory/childNum';
import ParentInfo from './components/exploretory/parentInfo';
import BasicQuestions from './components/exploretory/basicQuestions';
import NotFound from './components/not-found/NotFound';
//admin case
import AdminDashboard from './components/admin/dashboard/dashboard';
import ChildDoc from './components/admin/dashboard/childdoc';

import './App.css';
if (localStorage.jwtToken) {
  
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/parentInfo" component={ParentInfo} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/childnum" component={ChildNum} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/basicquestions" component={BasicQuestions} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/admindashboard" component={AdminDashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/childinfo" component={ChildDoc} />
            </Switch>
            {/* <Switch>
              <PrivateRoute exact path="/question" component={NewQuestion} />
            </Switch> */}
            {/* <Switch>
              <PrivateRoute exact path="/examination" component={Examination} />
            </Switch> */}
            {/* <Switch>
              <AdminRoute exact path="/admindashboard" component={AdminDashboard}/>
            </Switch> */}
            {/* <Switch>
              <AdminRoute exact path="/teacher" component={TeacherManager}/>
            </Switch> */}
            {/* <Switch>
              <AdminRoute exact path="/problemmgr" component={ProblemManager}/>
            </Switch> */}
            {/* <Switch>
              <AdminRoute exact path="/resultmgr" component={ResultManager}/>
            </Switch> */}
            {/* <Route exact path="/admindashboard" component={AdminDashboard} /> */}
            <Route exact path="/not-found" component={NotFound} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
