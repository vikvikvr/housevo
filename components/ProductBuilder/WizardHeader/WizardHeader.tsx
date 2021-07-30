import Image from "next/image";
import { pageNames } from "data";
import { arrowLightIcon, arrowDarkIcon } from "assets/images";

import styles from "./WizardHeader.module.scss";

interface Props {
  step: number;
  selectStep(step: number): void;
}

const headerTitles = ["select model", "select color", "accessories", "summary"];

function WizardHeader({ step, selectStep }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleMobile}>{headerTitles[step]}</h1>
      <h1 className={styles.titleDesktop}>product builder</h1>
      <span className={styles.stepCounter}>Step {step + 1} of 4</span>
      <ul className={styles.links} data-testid="WizardHeader__links__container">
        {pageNames.map((pageName, index) => (
          <li
            key={pageName}
            onClick={() => selectStep(index)}
            data-selected={step === index}
          >
            {pageName}
          </li>
        ))}
      </ul>
      {/* TODO: extract button to component */}
      <button className={styles.backButton} data-step={step}>
        <span className={styles.iconContainerLight}>
          <Image src={arrowLightIcon} alt="arrow icon" />
        </span>
        <span className={styles.iconContainerDark}>
          <Image src={arrowDarkIcon} alt="arrow icon" />
        </span>
        <span>Article & Download</span>
      </button>
    </div>
  );
}

export default WizardHeader;
