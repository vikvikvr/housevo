// from 123456 to 123.456
export function numberWithPeriods(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
