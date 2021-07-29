/* eslint-disable @next/next/no-img-element */
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
        {/* TODO: remove unused button styles */}
        {/* TODO: disable button when no color selected yet */}
        {step > 0 && (
          <div
            className={styles.backButtonBig}
            data-testid="WizardFooter__backButton__big"
          >
            <ScrollUpButton
              variant="secondary"
              textOptions={buttonTexts}
              currentIndex={step - 1}
              onClick={onBack}
            />
          </div>
        )}
        <div
          className={styles.backButton}
          onClick={onBack}
          data-testid="WizardFooter__backButton__small"
        >
          <span className={styles.iconContainer}>
            <Image
              src={arrowDarkIcon}
              alt="arrow back"
              className={styles.icon}
            />
          </span>
        </div>
        <ScrollUpButton
          variant="primary"
          textOptions={buttonTexts}
          currentIndex={step + 1}
          onClick={onNext}
        />
      </nav>
    </footer>
  );
}

export default WizardFooter;
