import { ParkingSpot } from "../models/ParkingSpot";
import { VehicleType } from "../models/Vehicle";

export class ParkingSpotFactory {
  createSpot(id: string, size: VehicleType): ParkingSpot {
    return new ParkingSpot(id, size);
  }
}
