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
      <h1 className={styles.title}>{headerTitles[step]}</h1>
      <span className={styles.stepCounter}>Step {step + 1} of 4</span>
      <ul className={styles.links}>
        <li onClick={() => selectStep(0)}>models</li>
        <li onClick={() => selectStep(1)}>colors</li>
        <li onClick={() => selectStep(2)}>accessories</li>
        <li onClick={() => selectStep(3)}>summary</li>
      </ul>
      {step === 0 && (
        <button className={styles.backButton}>
          <span className={styles.iconContainer}>
            <Image src={arrowLightIcon} alt="arrow icon" />
          </span>
          <span>Article & Download</span>
        </button>
      )}
    </div>
  );
}

export default WizardHeader;
