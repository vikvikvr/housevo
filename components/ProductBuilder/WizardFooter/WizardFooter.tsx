import styles from "./WizardFooter.module.scss";

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
    <div>
      <div>some image {imageUrl}</div>
      <div>total: {totalPrice}</div>
      {step > 0 && <button onClick={onBack}>⏪</button>}
      <button onClick={onNext}>{buttonTexts[step]}</button>
    </div>
  );
}

export default WizardFooter;
