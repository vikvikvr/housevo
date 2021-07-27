import { CarColor } from "types";
import styles from "./ColorPicker.module.scss";

interface Props {
  selectedColorIndex: number;
  colors: CarColor[];
  onSelectColor(colorIndex: number): void;
}

function ColorPicker({
  selectedColorIndex,
  colors,
  onSelectColor,
}: Props): JSX.Element {
  return (
    <div>
      <h1>color picker</h1>
      <ul>
        {colors.map((color, index) => (
          <li key={color.name} onClick={() => onSelectColor(index)}>
            selected {selectedColorIndex === index ? "true " : "false "}
            {color.name}
            {color.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorPicker;
