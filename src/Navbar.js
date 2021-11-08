import logo from './assets/logo.png';
import user from './assets/user.png';

const Navbar = () => {
  return (
    <header>
      <div className='container row'>
        <a className='logo' href='#'>
          <img src={logo} alt='conquering responsive logo' />
        </a>
        <nav className='nav'>
          <p>Admin</p>
          <a href=''>
            <img src={user} alt='user icon' />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
