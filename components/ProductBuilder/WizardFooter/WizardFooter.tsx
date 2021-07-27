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
    <div className={styles.container}>
      <div className={styles.carInfo}>
        <div>some image {imageUrl}</div>
        <div>total: {totalPrice}</div>
      </div>
      {step > 0 && <button onClick={onBack}>{buttonTexts[step - 1]}</button>}
      <button onClick={onNext}>{buttonTexts[step]}</button>
    </div>
  );
}

export default WizardFooter;
