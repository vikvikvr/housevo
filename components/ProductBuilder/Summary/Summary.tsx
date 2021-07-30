/* eslint-disable @next/next/no-img-element */
import { Car } from "types";
import { numberWithPeriods } from "helpers";
import ColorBubble from "components/ColorBubble";

import styles from "./Summary.module.scss";

interface Props {
  car: Car;
}

function Summary({ car }: Props): JSX.Element {
  return (
    <ul className={styles.container} data-testid="Summary__container">
      <li className={styles.section}>
        <h2 className={styles.sectionTitle}>model</h2>
        <img
          className={styles.carPicture}
          src={car.color.imageUrl}
          alt="car image"
        />
        <h1 className={styles.modelName}>{car.model.name}</h1>
        <p className={styles.modelDescription}>{car.model.description}</p>
      </li>
      <li className={styles.section}>
        <h2 className={styles.sectionTitle}>color</h2>
        <div className={styles.colorRow}>
          <ColorBubble hexCode={car.color.hexCode} />
          <span className={styles.colorDescription}>
            {car.color.name} - ${numberWithPeriods(car.color.price)}
          </span>
        </div>
      </li>
      <li className={styles.section}>
        <h2 className={styles.sectionTitle}>accessories</h2>
        <ul className={styles.accessories}>
          {car.accessories.map((accessory) => (
            <li key={accessory.name}>• {accessory.name}</li>
          ))}
          {car.accessories.length === 0 && <li>• No accessories selected</li>}
        </ul>
      </li>
    </ul>
  );
}

export default Summary;
