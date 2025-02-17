import { FeeCalculationStrategy } from "./FeeCalculationStrategy";
import { ParkingTransaction } from "../models/ParkingTransaction";
import { ParkingFees } from "../utils/ParkingFees";

export class MotorcycleFeeStrategy implements FeeCalculationStrategy {
  calculateFee(transaction: ParkingTransaction): number {
    const duration =
      (transaction.exitTime!.getTime() - transaction.entryTime.getTime()) /
      (1000 * 60 * 60);
    return Number((duration * ParkingFees.Motorcycle).toFixed(2));
  }
}
