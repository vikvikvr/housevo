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
  // TODO: extract to custom hook
  const [wizardStep, setWizardStep] = useState(0);
  const [carModel, setCarModel] = useState(0);
  const [carColor, setCarColor] = useState(0);
  const [carAccessories, setCarAccessories] = useState<number[]>([]);

  function toggleAccessory(index: number) {
    if (carAccessories.includes(index)) {
      setCarAccessories((accessories) => {
        return accessories.filter((acc) => acc !== index);
      });
    } else {
      setCarAccessories((accessories) => {
        return [...accessories, index];
      });
    }
  }

  function handleNextStep() {
    if (wizardStep === 3) {
      alert("BUY!");
    } else {
      setWizardStep((step) => step + 1);
    }
  }

  function getDesiredCarData(): Car {
    const selectedAccessories = carsOptions[carModel].accessories.filter(
      (_, index) => {
        return carAccessories.includes(index);
      },
    );

    return {
      model: carsOptions[carModel].model,
      accessories: selectedAccessories,
      color: carsOptions[carModel].colors[carColor],
    };
  }

  return (
    <div className={styles.container}>
      <WizardHeader step={wizardStep} selectStep={setWizardStep} />
      {wizardStep === 0 && (
        <ModelPicker
          availableModels={carsOptions.map((option) => option.model)}
          selectedModel={carsOptions[carModel].model}
          onSelectModel={setCarModel}
        />
      )}
      {wizardStep === 1 && (
        <ColorPicker
          colors={carsOptions[carModel].colors}
          selectedColorIndex={carColor}
          onSelectColor={setCarColor}
        />
      )}
      {wizardStep === 2 && (
        <AccessoriesPicker
          accessories={carsOptions[carModel].accessories}
          selectedAccessories={carAccessories}
          toggleAccessory={toggleAccessory}
        />
      )}
      {wizardStep === 3 && <Summary car={getDesiredCarData()} />}
      <WizardFooter
        step={wizardStep}
        onNext={handleNextStep}
        onBack={() => setWizardStep((step) => step - 1)}
        imageUrl="some image path"
        totalPrice={12345}
      />
    </div>
  );
}

export default ProductBuilder;
