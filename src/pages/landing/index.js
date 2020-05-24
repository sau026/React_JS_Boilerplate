import React from 'react';
import { Link } from "react-router-dom";

import './index.scss';

function LandingPage() {
  return (   
    <div className="landing__page-conatiner -site-text-size">
      <div  className="landing__message-wrapper">
        <h1>Welcome, This is React Boilerplate</h1>
        <div className="landing__stepstouse-container">
          <div className="landing__login-steps">
            <h3>If you alreday have an account</h3>
            <Link className="cta" to={`/login`}>Login</Link>
          </div>
          <div className="landing__register-steps">
            <h3>
              If you don't have an account create one
            </h3>
            <Link className="cta" to={`/register`}>Register</Link>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default LandingPage;
