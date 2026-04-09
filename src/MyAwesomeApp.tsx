import type { CSSProperties } from "react";

// Se recomienda dejar las variables constantes fuera de la función
const firstName = 'David';
const lastName = 'Cornejo';

const favouriteGames = ['Rocket League', 'TFT', 'Life is Strange', 'GTA: San Andreas'];
const isActive = false;

const address = {
  zipCode: 'ABC-123',
  country: 'Chile',
};

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 5,
  padding: 10,
  marginTop: 20,
};

export function MyAwesomeApp() {
  return (
    <>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favouriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h3>{isActive ? 'Activo' : 'No Activo'}</h3>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
}