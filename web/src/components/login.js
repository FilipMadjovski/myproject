const Login = () => {
  return (
    <div>
      <div className='login'>
        <h2 className='h2-modif'>Log in</h2>
        <div className='hr-lane' />
      </div>
      <div className='head-div-login'>
        <div className='login-div-left'>
          <h1>
            <span className='orange-text'>Welcome to</span> Baby's
          </h1>
          <p className='span-log'>
            Lorem ipsum dolor sit amet, consectetur adipis lorem, sed do eiusmod
            tempor incididunt ut labore lorem. lorem ipsum dolor sit amet,
            consectetur adipis lorem, sed do eiusmod tempor incididunt ut labore
            lorem aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='login-div-right'>
          <p>Email</p>
          <input type='email' placeholder='user@domain.com' />
          <p>Password</p>
          <input type='password' placeholder='******' />
          <button>LOG IN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
