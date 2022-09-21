const Nav = () => {
  return (
    <nav class='nav'>
      <span className='nav-img'>
        <img src='/images/navBaby.png' alt='notFnd' />
      </span>
      <div className='nav-span'>
        <span className='sp'>BREAKFAST</span>
        <span className='sp'>BRUNCH</span>
        <span className='sp'>LUNCH</span>
        <span className='sp'>DINNER</span>
      </div>
      <div className='nav-right'>
        <button className='log-in'>LOG IN</button>
        <span className='sp'>or</span>
        <button className='cr-acc'>CRAETE ACCOUNT</button>
      </div>
    </nav>
  );
};

export default Nav;
