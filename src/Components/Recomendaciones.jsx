import React from 'react';

const Recomendaciones = () => {
  const recomendaciones = [
    'Recomendación 1',
    'Recomendación 2',
    'Recomendación 3',
  ];

  return (
    <div>
      <h2>Recomendaciones</h2>
      <ul>
        {recomendaciones.map((recomendacion, index) => (
          <li key={index}>{recomendacion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recomendaciones;