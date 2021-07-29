import { useEffect, useState } from "react";
import WizardHeader from "./WizardHeader";
import WizardFooter from "./WizardFooter";
import ModelPicker from "./ModelPicker";
import ColorPicker from "./ColorPicker";
import AccessoriesPicker from "./AccessoriesPicker";
import Summary from "./Summary";
import { carsOptions } from "data";
import styles from "./ProductBuilder.module.scss";
import { Car } from "types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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

  function carTotalPrice(car: Car): number {
    let totalPrice = car.model.basePrice;
    totalPrice += car.color.price;
    totalPrice += car.accessories.reduce(
      (total, accessory) => total + accessory.price,
      0,
    );

    return totalPrice;
  }

  const desiredCar = getDesiredCarData();
  const transitionProps = {
    timeout: 500,
    classNames: "transition",
    unmountOnExit: true,
  };

  return (
    <div className={styles.container}>
      <WizardHeader step={wizardStep} selectStep={setWizardStep} />
      <div className={styles.pageContent}>
        <CSSTransition in={wizardStep === 0} {...transitionProps}>
          <ModelPicker
            key="model-picker"
            availableModels={carsOptions.map((option) => option.model)}
            selectedModel={carsOptions[carModel].model}
            onSelectModel={setCarModel}
          />
        </CSSTransition>
        <CSSTransition in={wizardStep === 1} {...transitionProps}>
          <ColorPicker
            key="color-picker"
            colors={carsOptions[carModel].colors}
            selectedColorIndex={carColor}
            onSelectColor={setCarColor}
          />
        </CSSTransition>
        <CSSTransition in={wizardStep === 2} {...transitionProps}>
          <AccessoriesPicker
            key="accessories-picker"
            accessories={carsOptions[carModel].accessories}
            selectedAccessories={carAccessories}
            toggleAccessory={toggleAccessory}
          />
        </CSSTransition>
        <CSSTransition in={wizardStep === 3} {...transitionProps}>
          <Summary car={desiredCar} />
        </CSSTransition>
      </div>
      <WizardFooter
        step={wizardStep}
        onNext={handleNextStep}
        onBack={() => setWizardStep((step) => step - 1)}
        imageUrl={desiredCar.model.imageUrl}
        totalPrice={carTotalPrice(desiredCar)}
      />
    </div>
  );
}

export default ProductBuilder;
