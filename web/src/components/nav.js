import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <span className='img-nav'>
        <img src='/images/navBaby.png' alt='babyNav' />
      </span>
      <div className='parag-nav'>
        <p className='par'>BREAKFAST</p>
        <span className='circle-nav' />
        <p>BRUNCH</p>
        <span className='circle-nav' />
        <p>LUNCH</p>
        <span className='circle-nav' />
        <p>DINNER</p>
      </div>
      <div className='nav-buttons'>
        <button className='log-in'><Link to='/login'>LOG IN</Link></button>
        <span className='or'>or</span>
        <button className='cr-acc'>CRAETE ACCOUNT</button>
      </div>
    </nav>
  );
};

export default Nav;
