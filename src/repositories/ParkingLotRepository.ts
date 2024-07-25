import { ParkingSpot } from "../models/ParkingSpot";
import { VehicleType } from "../models/Vehicle";
import { ParkingTransaction } from "../models/ParkingTransaction";

export class ParkingLotRepository {
  private spots: ParkingSpot[];
  private transactions: ParkingTransaction[];

  constructor() {
    this.spots = [];
    this.transactions = [];
  }

  addSpot(spot: ParkingSpot): void {
    this.spots.push(spot);
  }

  findAvailableSpot(vehicleType: VehicleType): ParkingSpot | null {
    return (
      this.spots.find((spot) => spot.isAvailable && spot.size >= vehicleType) ||
      null
    );
  }

  addTransaction(transaction: ParkingTransaction): void {
    this.transactions.push(transaction);
  }

  findTransactionByVehicleNumberPlate(
    vehicleNumberPlate: string
  ): ParkingTransaction | null {
    return (
      this.transactions.find(
        (tx) => tx.vehicle.numberPlate === vehicleNumberPlate && !tx.exitTime
      ) || null
    );
  }
}
