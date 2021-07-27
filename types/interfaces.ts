// **** Car related (product builder wizard) ****

export interface Car {
  model: CarModel;
  color: CarColor;
  accessories: CarAccessory[];
}

export interface CarModel {
  name: string;
  description: string;
  basePrice: number;
}

export interface CarColor {
  name: string;
  hexCode: string;
  price: number;
  imageUrl: string;
}

export interface CarAccessory {
  name: string;
  price: number;
}
