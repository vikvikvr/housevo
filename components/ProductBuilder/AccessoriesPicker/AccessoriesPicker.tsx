import styles from "./AccessoriesPicker.module.scss";
import { CarAccessory } from "types";

interface Props {
  selectedAccessories: number[];
  accessories: CarAccessory[];
  toggleAccessory(index: number);
}

function AccessoriesPicker({
  selectedAccessories,
  accessories,
  toggleAccessory,
}: Props): JSX.Element {
  return (
    <div>
      <h1>acc picker</h1>
      <ul>
        {accessories.map((accessory, index) => (
          <li key={accessory.name}>
            <div>{accessory.name}</div>
            <div>{accessory.price}</div>
            <input
              type="checkbox"
              onChange={() => toggleAccessory(index)}
              checked={selectedAccessories.includes(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccessoriesPicker;
