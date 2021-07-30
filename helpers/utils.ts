import { Car } from "types";

// from 123456 to 123.456
export function numberWithPeriods(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function carTotalPrice(car: Car): number {
  let totalPrice = car.model.basePrice;
  totalPrice += car.color.price;
  totalPrice += car.accessories.reduce(
    (total, accessory) => total + accessory.price,
    0,
  );

  return totalPrice;
}
