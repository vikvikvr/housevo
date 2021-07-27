import { useState } from "react";
import WizardHeader from "./WizardHeader";
import styles from "./ProductBuilder.module.scss";

function ProductBuilder() {
  const [wizardStep, setWizardStep] = useState(0);

  return (
    <div>
      <div>page: {wizardStep}</div>
      <WizardHeader step={wizardStep} selectStep={setWizardStep} />
    </div>
  );
}

export default ProductBuilder;
