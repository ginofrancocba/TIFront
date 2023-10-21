import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import { useTheme } from './GlobalContext';   
import './Header.css';


function Navbar ()  {
  const { theme, toggleTheme} = useTheme();
    
  return (
      <div>
           <nav>
            <div className='lema'>
                <Link className='nav-a' to="/">
                  <img className='logo' src='/images/logo.png' alt='Logo secta'/>Lema BY SectArg
                </Link>
            </div>
            <div className='nav-ul'>
                <ul>          
                    <li>
                      <Link className='nav-a' to="/contact">Contacto</Link>
                    </li>
                    <li>
                      <Link className='nav-a' to="/favs">Destacados</Link>
                    </li>
                </ul>
            </div>
            <button>
            <Link  to="">Crear cuenta</Link>  
            </button>
            <button>
              <Link to="">Iniciar sesión</Link>  
            </button>
            <button className='theme'
             onClick={toggleTheme}>
             <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} /> 
            </button>
          </nav>
      </div>
    );
  }

  export default Navbar;