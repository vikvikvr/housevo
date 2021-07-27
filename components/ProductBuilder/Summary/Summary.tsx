import styles from "./Summary.module.scss";
import { Car } from "types";

interface Props {
  car: Car;
}

function Summary({ car }: Props): JSX.Element {
  return (
    <div>
      <h1>summary</h1>
      <h3>model</h3>
      <div>image {car.color.imageUrl}</div>
      <h3>{car.model.name}</h3>
      <div>{car.model.description}</div>
      <h3>color</h3>
      <div>
        <div>{car.color.hexCode}</div>
        <div>{car.color.name}</div>
        <div>{car.color.price}</div>
      </div>
      <h3>accessories</h3>
      <ul>
        {car.accessories.map((accessory) => (
          <li key={accessory.name}>{accessory.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;
