import styles from "./Summary.module.scss";
import { Car } from "types";

interface Props {
  car: Car;
}

function Summary({ car }: Props): JSX.Element {
  return (
    <ul className={styles.container}>
      <li>
        <h2 className={styles.sectionTitle}>model</h2>
        <img
          className={styles.carPicture}
          src={car.color.imageUrl}
          alt="car image"
        />
        <h1 className={styles.modelName}>{car.model.name}</h1>
        <p className={styles.modelDescription}>{car.model.description}</p>
      </li>
      <li>
        <h2 className={styles.sectionTitle}>color</h2>
        <div className={styles.colorRow}>
          <div
            className={styles.colorCircle}
            style={{ backgroundColor: car.color.hexCode }}
          ></div>
          <span className={styles.colorDescription}>
            {car.color.name} - ${car.color.price}
          </span>
        </div>
      </li>
      <li>
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
