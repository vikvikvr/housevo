/* eslint-disable @next/next/no-img-element */
import { ColorBubble } from "components";
import { numberWithPeriods } from "helpers";
import { CarColor } from "types";
import styles from "./ColorPicker.module.scss";

interface Props {
  colors: CarColor[];
  selectedColorIndex: number;
  onSelectColor(colorIndex: number): void;
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
            tooltipText={`${color.name} - $${numberWithPeriods(color.price)}`}
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
