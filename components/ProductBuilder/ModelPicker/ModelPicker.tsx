import styles from "./ModelPicker.module.scss";
import Image from "next/image";
import { CarModel } from "types";

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
    <ul className={styles.container}>
      {availableModels.map((model, index) => (
        <li
          className={styles.modelContainer}
          onClick={() => onSelectModel(index)}
          key={model.name}
        >
          <h1>{model.name}</h1>
          <img
            className={styles.modelImage}
            src={model.imageUrl}
            alt="model image"
          />
          <span className={styles.price}>from ${model.basePrice}</span>
          <input
            className={styles.radioInput}
            type="radio"
            name="model"
            value={selectedModel.name}
            checked={selectedModel.name === model.name}
            readOnly
          />
        </li>
      ))}
    </ul>
  );
}

export default ModelPicker;
