import styles from "./ScrollUpButton.module.scss";
import Image from "next/image";
import { arrowLightIcon } from "assets/images";

interface Props {
  textOptions: string[];
  currentIndex: number;
  onClick();
}

function ScrollUpButton({
  textOptions,
  currentIndex,
  onClick,
}: Props): JSX.Element {
  return (
    <button className={styles.scrollUpButton} onClick={onClick}>
      <span
        className={styles.textContainer}
        style={{
          transform: `translateY(${4 - currentIndex * 2}rem)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {textOptions.map((text, index) => {
          return (
            <div
              key={text}
              data-visible={currentIndex === index}
              data-text={text}
            >
              {text}
            </div>
          );
        })}
      </span>
      <span className={styles.buttonIcon}>
        <Image src={arrowLightIcon} alt="arrow icon" />
      </span>
    </button>
  );
}

export default ScrollUpButton;
