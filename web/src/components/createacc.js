// import React, {useState} from 'react';

const Createacc = () => {

    // const [firstName, setFristName] = useState('');

  return (
    <div>
      <div className='login'>
        <h2 className='h2-modif'>Create Account</h2>
        <div className='hr-lane' />
      </div>
      <div className='cracc-head-div'>
        <div className='cracc-div-left'>
          <h1>
            <span className='orange-text'>Create your</span>
          </h1>
          <h1 className='grey-babyy'>account</h1>
          <p className='span-logg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquip ex ea
            commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </div>
        <div className='cracc-div-middle'>
          <p className='em'>First Name</p>
          <input className='bckgr-in' type='text' placeholder='John' />
          <p className='em'>Email</p>
          <input className='bckgr-in' type='text' placeholder='john@smith.com' />
          <p className='em'>Password</p>
          <input className='bckgr-in' type='password' placeholder='******' />
          <button className='cracc-cracc'>CREATE ACCOUNT</button>
        </div>
        <div className='cracc-div-right'>
          <p className='em'>Last Name</p>
          <input className='bckgr-in' type='text' placeholder='Smith' />
          <p className='em'>Birthday</p>
          <input className='bckgr-in' type='number' placeholder='22-12-1999'
           />
          <p className='em'>Repeat Password</p>
          <input className='bckgr-in' type='password' placeholder='******' />
          
        </div>
      </div>
    </div>
  );
};

export default Createacc;
