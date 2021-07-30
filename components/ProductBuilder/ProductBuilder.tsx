import WizardHeader from "./WizardHeader";
import WizardFooter from "./WizardFooter";
import ModelPicker from "./ModelPicker";
import ColorPicker from "./ColorPicker";
import AccessoriesPicker from "./AccessoriesPicker";
import Summary from "./Summary";
import { carsOptions } from "data";
import styles from "./ProductBuilder.module.scss";
import { CSSTransition } from "react-transition-group";
import useProductBuilder from "hooks/useProductBuilder";
import { carTotalPrice } from "helpers";

function ProductBuilder() {
  const {
    desiredCar,
    setCarColor,
    setCarModel,
    wizardStep,
    setWizardStep,
    carModel,
    carColor,
    carAccessories,
    toggleAccessory,
    handleNextStep,
  } = useProductBuilder(carsOptions);

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
            selectedModel={desiredCar.model}
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
