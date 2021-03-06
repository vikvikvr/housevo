import { carsOptions } from "data";
import { carTotalPrice } from "helpers";
import { useProductBuilder } from "hooks";
import { CSSTransition } from "react-transition-group";

import Summary from "./Summary";
import WizardHeader from "./WizardHeader";
import WizardFooter from "./WizardFooter";
import ModelPicker from "./ModelPicker";
import ColorPicker from "./ColorPicker";
import AccessoriesPicker from "./AccessoriesPicker";
import styles from "./ProductBuilder.module.scss";

// **** Allows to customize a car before buying it ****

function ProductBuilder(): JSX.Element {
  const {
    form,
    setForm,
    desiredCar,
    wizardStep,
    setWizardStep,
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
            availableModels={carsOptions.map((option) => option.model)}
            selectedModel={desiredCar.model}
            onSelectModel={(model) => setForm((form) => ({ ...form, model }))}
          />
        </CSSTransition>
        <CSSTransition in={wizardStep === 1} {...transitionProps}>
          <ColorPicker
            colors={carsOptions[form.model].colors}
            selectedColorIndex={form.color}
            onSelectColor={(color) => setForm((form) => ({ ...form, color }))}
          />
        </CSSTransition>
        <CSSTransition in={wizardStep === 2} {...transitionProps}>
          <AccessoriesPicker
            accessories={carsOptions[form.model].accessories}
            selectedAccessories={form.accessories}
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
