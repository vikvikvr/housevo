import styles from "./ColorBubble.module.scss";

interface Props {
  hexCode: string;
  isSelected: boolean;
  onClick(): void;
  small?: boolean;
}

function ColorBubble({
  hexCode,
  small,
  isSelected,
  onClick,
}: Props): JSX.Element {
  return (
    <div
      className={styles.container}
      data-selected={isSelected}
      data-small={small}
      onClick={onClick}
    >
      <div className={styles.whiteCircle}>
        <div
          className={styles.coloredCircle}
          style={{ backgroundColor: hexCode }}
        ></div>
      </div>
    </div>
  );
}

export default ColorBubble;
