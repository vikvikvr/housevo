import styles from "./WizardHeader.module.scss";

interface Props {
  step: number;
  selectStep(step: number): void;
}

const headerTitles = ["select model", "select color", "accessories", "summary"];

function WizardHeader({ step, selectStep }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{headerTitles[step]}</h1>
      <span className={styles.stepCounter}>
        Step <b>{step + 1}</b> of 4
      </span>
      <ul className={styles.links}>
        <li onClick={() => selectStep(0)}>models</li>
        <li onClick={() => selectStep(1)}>colors</li>
        <li onClick={() => selectStep(2)}>accessories</li>
        <li onClick={() => selectStep(3)}>summary</li>
      </ul>
      {step === 0 && (
        <button className={styles.backButton}>Article & Download</button>
      )}
    </div>
  );
}

export default WizardHeader;
