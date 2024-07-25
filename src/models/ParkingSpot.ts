import { VehicleType } from "./Vehicle";

export class ParkingSpot {
  id: string;
  size: VehicleType;
  isAvailable: boolean;

  constructor(id: string, size: VehicleType) {
    this.id = id;
    this.size = size;
    this.isAvailable = true;
  }
}
