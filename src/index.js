import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AccForm from './account';
import HomeSc from './Home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  function Home(){
    return(
      <h2 className="home">Cancellation</h2>
    )
  }
  
  function Account() {
    return (
      <h2 className="account">Account</h2>
    )
  }
  
  function DefaultRen() {
    return (<Router>
      <div>
        <h1>Bank Admin System</h1>
    <ul>
   < marquee behavior="scroll" scrollamount="3" direction="left" onmouseover="this.setAttribute('scrollamount',0);" onmouseout="this.start();">    
             
              <Link to="/account">|   Passenger    </Link>
              </ marquee>
          </ul>
         
  
        <Switch>
          <Route path="/account">
            <AccForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
  
  ReactDOM.render(
    <DefaultRen />,
    document.getElementById('root')
  );
  