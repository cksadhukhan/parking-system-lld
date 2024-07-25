import { FeeCalculationStrategy } from "./FeeCalculationStrategy";
import { ParkingTransaction } from "../models/ParkingTransaction";
import { ParkingFees } from "../utils/ParkingFees";

export class BusFeeStrategy implements FeeCalculationStrategy {
  calculateFee(transaction: ParkingTransaction): number {
    const duration =
      (transaction.exitTime!.getTime() - transaction.entryTime.getTime()) /
      (1000 * 60 * 60);
    return duration * ParkingFees.Bus;
  }
}
