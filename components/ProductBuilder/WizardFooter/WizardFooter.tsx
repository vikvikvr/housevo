/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { pageNames } from "data";
import { ScrollUpButton } from "components";
import { numberWithPeriods } from "helpers";
import { arrowDarkIcon } from "assets/images";

import styles from "./WizardFooter.module.scss";

interface Props {
  imageUrl: string;
  step: number;
  totalPrice: number;
  onBack(): void;
  onNext(): void;
}

const buttonTexts = [...pageNames, "buy now"];

// **** Bottom navigation ****

function WizardFooter({
  imageUrl,
  totalPrice,
  step,
  onBack,
  onNext,
}: Props): JSX.Element {
  return (
    <footer className={styles.container} data-testid="WizardFooter__container">
      <div className={styles.carInfo}>
        <img src={imageUrl} alt="car image" />
        <div className={styles.totalPrice}>
          <span>Total</span>
          <h2>${numberWithPeriods(totalPrice)}</h2>
        </div>
      </div>
      <nav className={styles.footerNav}>
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
        {step > 0 && (
          <div
            className={styles.backButtonSmall}
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
        )}
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
