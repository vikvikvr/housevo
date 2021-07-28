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
  const buttonTexts = ["colors", "accessories", "summary", "buy now"];
  return (
    <footer className={styles.container}>
      <div className={styles.carInfo}>
        <div>some image {imageUrl}</div>
        <div>total: {totalPrice}</div>
      </div>
      {step > 0 && (
        <button className={styles.backButton} onClick={onBack}>
          <span className={styles.buttonIcon}>
            <Image src={arrowDarkIcon} alt="arrow icon" />
          </span>
          <span>{buttonTexts[step - 1]}</span>
        </button>
      )}
      <button className={styles.forwardButton} onClick={onNext}>
        <span>{buttonTexts[step]}</span>
        <span className={styles.buttonIcon}>
          <Image src={arrowLightIcon} alt="arrow icon" />
        </span>
      </button>
    </footer>
  );
}

export default WizardFooter;
