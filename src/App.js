import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App row">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2 className="signup-head">Sign Up</h2> 
      </div>
	  {/* 
		  <p>
			<Link to="/">Home</Link>
		  </p>
		  <p>
			<Link to="/about">About</Link>
		  </p>
		  <p>
			<Link to="/settings">Settings</Link>
		  </p>
	  */}
  
   <form action="">
    <div className="container registration">
    <p class="registration__title">Please fill in this form to create an account.</p>
    
	<hr/>
	
	<label htmlFor="FirstName"><b>First name</b></label>
    <input type="text" placeholder="Enter First name" name="firstname" required />
	
	<label htmlFor="LastName"><b>Last name</b></label>
    <input type="text" placeholder="Enter Last name" name="lastname" required />

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

    <label>
      <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
	
    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}

export default App;
