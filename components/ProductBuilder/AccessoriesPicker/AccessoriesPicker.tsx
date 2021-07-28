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
    <ul className={styles.container}>
      {accessories.map((accessory, index) => (
        <li className={styles.accessoryItem} key={accessory.name}>
          <p className={styles.name}>{accessory.name}</p>
          <span className={styles.price}>${accessory.price}</span>
          <input
            className={styles.checkbox}
            type="checkbox"
            onChange={() => toggleAccessory(index)}
            checked={selectedAccessories.includes(index)}
          />
        </li>
      ))}
      {accessories.map((accessory, index) => (
        <li className={styles.accessoryItem} key={accessory.name}>
          <p className={styles.name}>{accessory.name}</p>
          <span className={styles.price}>${accessory.price}</span>
          <input
            className={styles.checkbox}
            type="checkbox"
            onChange={() => toggleAccessory(index)}
            checked={selectedAccessories.includes(index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default AccessoriesPicker;
