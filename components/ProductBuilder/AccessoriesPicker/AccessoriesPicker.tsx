import Image from "next/image";
import { CarAccessory } from "types";
import { numberWithPeriods } from "helpers";
import { checkIcon } from "assets/images";

import styles from "./AccessoriesPicker.module.scss";

interface Props {
  accessories: CarAccessory[];
  selectedAccessories: number[];
  toggleAccessory(index: number): void;
}

// **** Allows to toggle different car accessories ****

function AccessoriesPicker({
  selectedAccessories,
  accessories,
  toggleAccessory,
}: Props): JSX.Element {
  return (
    <ul className={styles.container} data-testid="AccessoriesPicker__container">
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
            <span className={styles.price}>
              ${numberWithPeriods(accessory.price)}
            </span>
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
