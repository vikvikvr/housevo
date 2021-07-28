import styles from "./WizardFooter.module.scss";
import { arrowDarkIcon, arrowLightIcon } from "assets/images/";
import Image from "next/image";

interface Props {
  imageUrl: string;
  totalPrice: number;
  step: number;
  onBack(): void;
  onNext(): void;
}

function WizardFooter({
  imageUrl,
  totalPrice,
  step,
  onBack,
  onNext,
}: Props): JSX.Element {
  const buttonTexts = ["model", "colors", "accessories", "summary", "buy now"];
  return (
    <footer className={styles.container}>
      <div className={styles.carInfo}>
        {/* TODO: replace with <Image /> */}
        <img src={imageUrl} alt="car image" />
        <div className={styles.totalPrice}>
          <span>Total</span>
          <h2>${totalPrice}</h2>
        </div>
      </div>
      <nav>
        {step > 0 && (
          <button className={styles.backButton} onClick={onBack}>
            <span className={styles.buttonIcon}>
              <Image src={arrowDarkIcon} alt="arrow icon" />
            </span>
            <span className={styles.buttonText}>{buttonTexts[step - 1]}</span>
          </button>
        )}
        <button className={styles.forwardButton} onClick={onNext}>
          <span className={styles.buttonText}>{buttonTexts[step + 1]}</span>
          <span className={styles.buttonIcon}>
            <Image src={arrowLightIcon} alt="arrow icon" />
          </span>
        </button>
      </nav>
    </footer>
  );
}

export default WizardFooter;
