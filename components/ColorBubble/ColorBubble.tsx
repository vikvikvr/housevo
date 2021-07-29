import styles from "./ColorBubble.module.scss";

interface Props {
  hexCode: string;
  tooltipText?: string;
  onClick?(): void;
  isSelected?: boolean;
}

function ColorBubble({
  hexCode,
  isSelected,
  onClick,
  tooltipText,
}: Props): JSX.Element {
  return (
    <div
      className={styles.container}
      data-selected={isSelected}
      data-clickable={Boolean(onClick)}
      onClick={onClick}
    >
      {tooltipText && <div className={styles.tooltip}>{tooltipText}</div>}
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
