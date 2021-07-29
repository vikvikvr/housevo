import styles from "./WizardFooter.module.scss";
import { arrowDarkIcon, arrowLightIcon } from "assets/images/";
import Image from "next/image";
import ScrollUpButton from "components/ScrollUpButton";
import { numberWithPeriods } from "helpers";

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
  const buttonTexts = ["models", "colors", "accessories", "summary", "buy now"];
  return (
    <footer className={styles.container} data-testid="WizardFooter__container">
      <div className={styles.carInfo}>
        {/* TODO: replace with <Image /> */}
        <img src={imageUrl} alt="car image" />
        <div className={styles.totalPrice}>
          <span>Total</span>
          <h2>${numberWithPeriods(totalPrice)}</h2>
        </div>
      </div>
      <nav>
        {step > 0 && (
          <button
            className={styles.backButton}
            onClick={onBack}
            data-testid="WizardFooter__button__back"
          >
            <span className={styles.buttonIcon}>
              <Image src={arrowDarkIcon} alt="arrow icon" />
            </span>
            <span className={styles.buttonText}>{buttonTexts[step - 1]}</span>
          </button>
        )}
        {/* TODO: disable button when no color selected yet */}
        <ScrollUpButton
          textOptions={buttonTexts}
          currentIndex={step + 1}
          onClick={onNext}
        />
      </nav>
    </footer>
  );
}

export default WizardFooter;
