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
    <div className={styles.container}>
      <ul>
        {availableModels.map((model, index) => (
          <li className={styles.modelContainer} key={model.name}>
            <h1>{model.name}</h1>
            <img
              className={styles.modelImage}
              src={model.imageUrl}
              alt="model image"
            />
            <div>from ${model.basePrice}</div>
            <input
              type="radio"
              name="model"
              value={selectedModel.name}
              checked={selectedModel.name === model.name}
              onChange={() => onSelectModel(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModelPicker;
