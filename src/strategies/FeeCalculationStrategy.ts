import { ParkingTransaction } from "../models/ParkingTransaction";

export interface FeeCalculationStrategy {
  calculateFee(transaction: ParkingTransaction): number;
}
