import { useState } from "react";
import { Car, CarOptions } from "types";

function useProductBuilder(carsOptions: CarOptions[]) {
  const [wizardStep, setWizardStep] = useState(0);
  const [form, setForm] = useState({
    model: 0,
    color: 0,
    accessories: [],
  });

  function toggleAccessory(index: number) {
    setForm((currentForm) => {
      let accessories = [...form.accessories, index];

      if (form.accessories.includes(index)) {
        accessories = form.accessories.filter((acc) => acc !== index);
      }

      return {
        ...currentForm,
        accessories,
      };
    });
  }

  function handleNextStep() {
    if (wizardStep === 3) {
      alert("BUY!");
    } else {
      setWizardStep((step) => step + 1);
    }
  }

  function getDesiredCarData(): Car {
    const selectedAccessories = carsOptions[form.model].accessories.filter(
      (_, index) => form.accessories.includes(index),
    );

    return {
      model: carsOptions[form.model].model,
      accessories: selectedAccessories,
      color: carsOptions[form.model].colors[form.color],
    };
  }

  const desiredCar = getDesiredCarData();

  return {
    desiredCar,
    form,
    setForm,
    wizardStep,
    setWizardStep,
    toggleAccessory,
    handleNextStep,
  };
}

export default useProductBuilder;
