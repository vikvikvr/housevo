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
    <footer className={styles.container}>
      <div className={styles.carInfo}>
        <div>some image {imageUrl}</div>
        <div>total: {totalPrice}</div>
      </div>
      {step > 0 && (
        <button className={styles.backButton} onClick={onBack}>
          {buttonTexts[step - 1]}
        </button>
      )}
      <button className={styles.forwardButton} onClick={onNext}>
        {buttonTexts[step]}
      </button>
    </footer>
  );
}

export default WizardFooter;
