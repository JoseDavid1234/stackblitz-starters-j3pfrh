import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      'https://mi0j29dooe.execute-api.us-east-1.amazonaws.com/prueba-jose/prueba-jose'
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>Status Code: {data.statusCode}</p>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
