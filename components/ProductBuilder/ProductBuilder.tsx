import { useState } from "react";
import WizardHeader from "./WizardHeader";
import WizardFooter from "./WizardFooter";
import ModelPicker from "./ModelPicker";
import { carsOptions } from "data";
import styles from "./ProductBuilder.module.scss";

function ProductBuilder() {
  const [wizardStep, setWizardStep] = useState(0);

  function handleNextStep() {
    if (wizardStep === 3) {
      alert("BUY!");
    } else {
      setWizardStep((step) => step + 1);
    }
  }

  return (
    <div>
      <div>page: {wizardStep}</div>
      <WizardHeader step={wizardStep} selectStep={setWizardStep} />
      <WizardFooter
        step={wizardStep}
        onNext={handleNextStep}
        onBack={() => setWizardStep((step) => step - 1)}
        imageUrl="some image path"
        totalPrice={12345}
      />
      {wizardStep === 0 && (
        <ModelPicker
          availableModels={carsOptions.map((option) => option.model)}
          selectedModel={carsOptions[0].model}
          onSelectModel={alert}
        />
      )}
    </div>
  );
}

export default ProductBuilder;
