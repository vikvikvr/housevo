import styles from "./WizardHeader.module.scss";

interface Props {
  step: number;
  selectStep(step: number): void;
}

function WizardHeader({ step, selectStep }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>Select Model</h2>
      <div className={styles.stepCounter}>step {step + 1} of 4</div>
      <ul className={styles.links}>
        <li onClick={() => selectStep(0)}>models</li>
        <li onClick={() => selectStep(1)}>colors</li>
        <li onClick={() => selectStep(2)}>accessories</li>
        <li onClick={() => selectStep(3)}>summary</li>
      </ul>
      <button className={styles.backButton}>Article & Download</button>
    </div>
  );
}

export default WizardHeader;
