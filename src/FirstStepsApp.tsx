import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      <ItemCounter name="PlayStation 5" quantity={1} />
      <ItemCounter name="Joystick DualSense" quantity={4} />
      <ItemCounter name="EA Sports FC 26" quantity={2} />
    </>
  );
}