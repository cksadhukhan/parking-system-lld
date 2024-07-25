import { Vehicle } from "./Vehicle";
import { ParkingSpot } from "./ParkingSpot";

export class ParkingTransaction {
  vehicle: Vehicle;
  spot: ParkingSpot;
  entryTime: Date;
  exitTime: Date | null;
  fee: number | null;

  constructor(vehicle: Vehicle, spot: ParkingSpot, entryTime: Date) {
    this.vehicle = vehicle;
    this.spot = spot;
    this.entryTime = entryTime;
    this.exitTime = null;
    this.fee = null;
  }
}
