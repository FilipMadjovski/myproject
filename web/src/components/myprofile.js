import React, { useState } from 'react';

const MyProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  return (
    <div>
      <div className='login'>
        <h2 className='h2-modif'>My Profile</h2>
        <div className='hr-lane' />
      </div>
      <div className='cracc-head-div'>
        <div className='avatar'>
          <span>
            <img className='avatar-img' src='/images/avatar1.png' alt='Avatar' />
          </span>
          <button>CHANGE AVATAR</button>
        </div>
        <div className='cracc-div-middle'>
          <p className='em'>First Name</p>
          <input
            className='bckgr-in'
            type='text'
            placeholder='John'
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <p className='em'>Email</p>
          <input
            className='bckgr-in'
            type='text'
            placeholder='john@smith.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className='em'>Password</p>
          <input
            className='bckgr-in'
            type='password'
            placeholder='******'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className='avatar-save'>SAVE</button>
        </div>
        <div className='cracc-div-right'>
          <p className='em'>Last Name</p>
          <input
            className='bckgr-in'
            type='text'
            placeholder='Smith'
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <p className='em'>Birthday</p>
          <input
            className='bckgr-in'
            type='number'
            placeholder='22-12-1999'
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
          />
          <p className='em'>Repeat Password</p>
          <input
            className='bckgr-in'
            type='password'
            placeholder='******'
            value={repPassword}
            onChange={(e) => {
              setRepPassword(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
