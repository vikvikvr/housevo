import styles from "./AccessoriesPicker.module.scss";
import { CarAccessory } from "types";
import { checkIcon } from "assets/images";
import Image from "next/image";

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
      {accessories.map((accessory, index) => {
        const isChecked = selectedAccessories.includes(index);
        return (
          <li
            className={styles.accessoryItem}
            data-checked={isChecked}
            onClick={() => toggleAccessory(index)}
            key={accessory.name}
          >
            <p className={styles.name}>{accessory.name}</p>
            <span className={styles.price}>${accessory.price}</span>
            {/* TODO: extract checkbox to seaprate component */}
            <div className={styles.checkbox} data-checked={isChecked}>
              <span className={styles.checkIcon}>
                <Image src={checkIcon} alt="check icon" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default AccessoriesPicker;
