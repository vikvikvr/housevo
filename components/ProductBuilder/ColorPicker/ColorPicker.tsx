/* eslint-disable @next/next/no-img-element */
import { ColorBubble } from "components";
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
    <div className={styles.container} data-testid="ColorPicker__container">
      <img
        className={styles.carImage}
        src={colors[selectedColorIndex].imageUrl}
        alt="car color preview"
      />
      <ul className={styles.colorsRow}>
        {colors.map((color, index) => (
          <ColorBubble
            isSelected={selectedColorIndex === index}
            hexCode={color.hexCode}
            key={color.name}
            onClick={() => onSelectColor(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ColorPicker;
