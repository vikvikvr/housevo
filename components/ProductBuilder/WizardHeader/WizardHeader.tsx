import styles from "./WizardHeader.module.scss";
import { arrowLightIcon } from "assets/images";
import Image from "next/image";

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
        <li data-selected={step === 0} onClick={() => selectStep(0)}>
          models
        </li>
        <li data-selected={step === 1} onClick={() => selectStep(1)}>
          colors
        </li>
        <li data-selected={step === 2} onClick={() => selectStep(2)}>
          accessories
        </li>
        <li data-selected={step === 3} onClick={() => selectStep(3)}>
          summary
        </li>
      </ul>
      <button className={styles.backButton} data-step={step}>
        {/* TODO: show icon for desktop */}
        <span className={styles.iconContainer}>
          <Image src={arrowLightIcon} alt="arrow icon" />
        </span>
        <span>Article & Download</span>
      </button>
    </div>
  );
}

export default WizardHeader;
