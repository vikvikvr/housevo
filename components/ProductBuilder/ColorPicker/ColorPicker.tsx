import { CarColor } from "types";
import styles from "./ColorPicker.module.scss";

interface Props {
  selectedColorIndex: number;
  colors: CarColor[];
  onSelectColor(colorIndex: number);
}

function ColorPicker({
  selectedColorIndex,
  colors,
  onSelectColor,
}: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        className={styles.carImage}
        src={colors[selectedColorIndex].imageUrl}
        alt="car color preview"
      />
      <ul className={styles.colorsRow}>
        {colors.map((color, index) => (
          <li
            className={styles.colorCircle}
            data-selected={selectedColorIndex === index}
            key={color.name}
            onClick={() => onSelectColor(index)}
          >
            <div
              className={styles.innerCircle}
              style={{ backgroundColor: color.hexCode }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorPicker;
