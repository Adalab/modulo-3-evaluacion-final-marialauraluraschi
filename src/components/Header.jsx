import '../styles/layout/Header.scss';
import logo from '../images/logo.jpg';
export const Header = () => {
  const igCrueca = 'https://www.instagram.com/cabezarueca/?hl=es';
  return (
    <>
      <header className='header'>
        <a href={igCrueca} target='_blank' rel='noreferrer'>
          <img src={logo} className='logo react' alt='React logo' />
        </a>
        <h1 className='header__title'>Cabeza Rueca</h1>
      </header>
    </>
  );
};
