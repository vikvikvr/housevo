import styles from "./ModelPicker.module.scss";
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
    <div>
      <h1>model picker</h1>
      <ul>
        {availableModels.map((model, index) => (
          <li key={model.name}>
            <div>{model.name}</div>
            <div>image {model.imageUrl}</div>
            <div>from {model.basePrice}</div>
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
