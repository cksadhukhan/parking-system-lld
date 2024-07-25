import { ParkingLotRepository } from "../repositories/ParkingLotRepository";
import { ParkingSpotFactory } from "../factories/ParkingSpotFactory";
import { Vehicle, VehicleType } from "../models/Vehicle";
import { ParkingTransaction } from "../models/ParkingTransaction";
import { FeeCalculationStrategy } from "../strategies/FeeCalculationStrategy";

export class ParkingLotService {
  private repository: ParkingLotRepository;
  private spotFactory: ParkingSpotFactory;
  private feeStrategies: Map<VehicleType, FeeCalculationStrategy>;

  constructor(
    repository: ParkingLotRepository,
    spotFactory: ParkingSpotFactory,
    feeStrategies: Map<VehicleType, FeeCalculationStrategy>
  ) {
    this.repository = repository;
    this.spotFactory = spotFactory;
    this.feeStrategies = feeStrategies;
  }

  checkIn(vehicle: Vehicle): ParkingTransaction | null {
    const availableSpot = this.repository.findAvailableSpot(vehicle.type);
    if (availableSpot) {
      availableSpot.isAvailable = false;
      const transaction = new ParkingTransaction(
        vehicle,
        availableSpot,
        new Date()
      );
      this.repository.addTransaction(transaction);
      return transaction;
    }
    return null;
  }

  checkOut(
    vehicleNumberPlate: string,
    exitTime: Date
  ): ParkingTransaction | null {
    const transaction =
      this.repository.findTransactionByVehicleNumberPlate(vehicleNumberPlate);
    if (transaction) {
      transaction.exitTime = exitTime;
      transaction.fee = this.calculateFee(transaction);
      transaction.spot.isAvailable = true;
      return transaction;
    }
    return null;
  }

  private calculateFee(transaction: ParkingTransaction): number {
    const strategy = this.feeStrategies.get(transaction.vehicle.type);
    if (strategy) {
      return strategy.calculateFee(transaction);
    }
    throw new Error("Fee strategy not found");
  }
}
