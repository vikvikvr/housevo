import { useState } from "react";
import WizardHeader from "./WizardHeader";
import WizardFooter from "./WizardFooter";
import ModelPicker from "./ModelPicker";
import ColorPicker from "./ColorPicker";
import AccessoriesPicker from "./AccessoriesPicker";
import Summary from "./Summary";
import { carsOptions } from "data";
import styles from "./ProductBuilder.module.scss";
import { Car } from "types";

function ProductBuilder() {
  const [wizardStep, setWizardStep] = useState(0);

  function handleNextStep() {
    if (wizardStep === 3) {
      alert("BUY!");
    } else {
      setWizardStep((step) => step + 1);
    }
  }

  function getDesiredCarData(): Car {
    return {
      model: carsOptions[0].model,
      accessories: [],
      color: carsOptions[0].colors[0],
    };
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
      {wizardStep === 1 && (
        <ColorPicker
          colors={carsOptions[0].colors}
          selectedColorIndex={0}
          onSelectColor={alert}
        />
      )}
      {wizardStep === 2 && (
        <AccessoriesPicker
          accessories={carsOptions[0].accessories}
          selectedAccessories={[0]}
          toggleAccessory={alert}
        />
      )}
      {wizardStep === 3 && <Summary car={getDesiredCarData()} />}
    </div>
  );
}

export default ProductBuilder;
