import React from 'react';

const Categorias = () => {
  const categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>{categoria}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
