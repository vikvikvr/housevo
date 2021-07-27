import styles from "./Summary.module.scss";
import { Car } from "types";

interface Props {
  car: Car;
}

function Summary({ car }: Props): JSX.Element {
  return (
    <main className={styles.container}>
      <section>
        <h3 className={styles.sectionTitle}>model</h3>
        <img
          className={styles.carPicture}
          src={car.color.imageUrl}
          alt="car image"
        />
        <h1 className={styles.modelName}>{car.model.name}</h1>
        <p className={styles.modelDescription}>{car.model.description}</p>
      </section>
      <section>
        <h3 className={styles.sectionTitle}>color</h3>
        <div className={styles.colorRow}>
          <div
            className={styles.colorCircle}
            style={{ backgroundColor: car.color.hexCode }}
          ></div>
          <span className={styles.colorDescription}>
            {car.color.name} - ${car.color.price}
          </span>
        </div>
      </section>
      <section>
        <h3 className={styles.sectionTitle}>accessories</h3>
        <ul className={styles.accessories}>
          {/* TODO: change message when no accessories selected */}
          {car.accessories.map((accessory) => (
            <li key={accessory.name}>• {accessory.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Summary;
