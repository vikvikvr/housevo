import styles from "./ScrollUpButton.module.scss";
import Image from "next/image";
import { arrowLightIcon, arrowDarkIcon } from "assets/images";

interface Props {
  currentIndex: number;
  textOptions: string[];
  variant: "primary" | "secondary";
  onClick(): void;
}

function ScrollUpButton({
  textOptions,
  currentIndex,
  variant,
  onClick,
}: Props): JSX.Element {
  return (
    <button
      className={styles.scrollUpButton}
      onClick={onClick}
      data-variant={variant}
    >
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
              className={styles.text}
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
        <Image
          src={variant === "primary" ? arrowLightIcon : arrowDarkIcon}
          alt="arrow icon"
        />
      </span>
    </button>
  );
}

export default ScrollUpButton;
