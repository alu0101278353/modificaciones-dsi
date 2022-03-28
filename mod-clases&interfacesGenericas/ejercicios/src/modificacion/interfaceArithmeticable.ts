export interface Arimethicable<T> {
  addNumbers(n1: T, n2: T): T[];
  // addNumbers(n1: T): T;
  substract(n1: T, n2: T): T[];
  // multiply(n1: T, n2: T): T;
  // divide(n1:T, n2: T): T;
}