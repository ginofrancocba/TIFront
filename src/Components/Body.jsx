import React from 'react';
import Buscador from './Buscador';
import Categorias from './Categorias';
import Recomendaciones from './Recomendaciones';
import './Body.css';

const Body = () => {
  
  return (
    <><div class='buscador'>
          <Buscador />
      </div>
      
      <div>
              <Categorias />
      </div>
      <div>
          <Recomendaciones />
      </div>
      
      </>
  );
}

export default Body;