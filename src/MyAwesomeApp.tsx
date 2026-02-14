// Se recomienda dejar las variables constantes fuera de la función
const firstName = 'David';
const lastName = 'Cornejo';

const favouriteGames = ['Rocket League', 'TFT', 'Life is Strange', 'GTA: San Andreas'];
const isActive = false;

const address = {
  zipCode: 'ABC-123',
  country: 'Chile',
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favouriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h3>{isActive ? 'Activo' : 'No Activo'}</h3>

      <p>{JSON.stringify(address)}</p>
    </>
  );
}