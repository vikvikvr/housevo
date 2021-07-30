import { useState } from "react";
import { Car, CarOptions } from "types";

function useProductBuilder(carsOptions: CarOptions[]) {
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

  const desiredCar = getDesiredCarData();

  return {
    desiredCar,
    setCarModel,
    setCarColor,
    wizardStep,
    setWizardStep,
    carModel,
    carColor,
    carAccessories,
    toggleAccessory,
    handleNextStep,
  };
}

export default useProductBuilder;
