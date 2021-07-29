import styles from "./ModelPicker.module.scss";
import Image from "next/image";
import { CarModel } from "types";
import { checkIcon } from "assets/images";
import { numberWithPeriods } from "helpers";

interface Props {
  selectedModel: CarModel;
  availableModels: CarModel[];
  onSelectModel(modelIndex: number);
}

function ModelPicker({
  selectedModel,
  availableModels,
  onSelectModel,
}: Props): JSX.Element {
  return (
    <ul className={styles.container} data-testid="ModelPicker__container">
      {availableModels.map((model, index) => (
        <li
          className={styles.modelContainer}
          onClick={() => onSelectModel(index)}
          key={model.name}
          data-checked={selectedModel.name === model.name}
        >
          <h1>{model.name}</h1>
          {/* TODO: figure out out to replace with <Image /> */}
          <img
            className={styles.modelImage}
            src={model.imageUrl}
            alt="model image"
          />
          <span className={styles.price}>
            from ${numberWithPeriods(model.basePrice)}
          </span>
          <div
            className={styles.radioButton}
            data-checked={selectedModel.name === model.name}
          >
            <span className={styles.iconContainer}>
              <Image src={checkIcon} alt="check icon" />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ModelPicker;
