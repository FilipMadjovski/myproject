import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className='login'>
        <h2 className='h2-modif'>Log in</h2>
        <div className='hr-lane' />
      </div>
      <div className='head-div-login'>
        <div className='login-div-left'>
          <h1>
            <span className='orange-text'>Welcome to</span>
            <span className='grey-baby'> Baby's</span>
          </h1>
          <p className='span-log'>
            Lorem ipsum dolor sit amet, consectetur adipis lorem, sed do eiusmod
            tempor incididunt ut labore lorem. lorem ipsum dolor sit amet,
            consectetur adipis lorem, sed do eiusmod tempor incididunt ut labore
            lorem aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='login-div-right'>
          <p className='em'>Email</p>
          <input
            className='bckgr-in'
            type='email'
            placeholder='user@domain.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className='pw'>Password</p>
          <input
            className='bckgr-in'
            type='password'
            placeholder='*****'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className='login-login'>
            <Link to='/myprofile'>LOG IN</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
