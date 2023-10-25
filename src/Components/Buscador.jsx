import React, { useState } from 'react';
import './Body.css';

const Buscador = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (event) => {
    setBusqueda(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Realizando búsqueda:', busqueda);
  }

  return (
    <div>
      <h2>Buscador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={busqueda}
          onChange={handleInputChange}
          placeholder="Buscar..."
          className='separacion'
        />
        <button type="submit"  style={{ color: 'red' }}>Buscar</button>
      </form>
    </div>
  );
}

export default Buscador;
