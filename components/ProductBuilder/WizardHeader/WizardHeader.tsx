import styles from "./WizardHeader.module.scss";

interface Props {
  step: number;
  selectStep(step: number): void;
}

function WizardHeader({ step, selectStep }: Props): JSX.Element {
  return (
    <div>
      <div>wizard header</div>
      <div>step {step + 1} of 4</div>
      <ul>
        <li onClick={() => selectStep(0)}>models</li>
        <li onClick={() => selectStep(1)}>colors</li>
        <li onClick={() => selectStep(2)}>accessories</li>
        <li onClick={() => selectStep(3)}>summary</li>
      </ul>
    </div>
  );
}

export default WizardHeader;
