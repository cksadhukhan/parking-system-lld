export enum VehicleType {
  Motorcycle,
  Car,
  Bus,
}

export class Vehicle {
  numberPlate: string;
  type: VehicleType;

  constructor(numberPlate: string, type: VehicleType) {
    this.numberPlate = numberPlate;
    this.type = type;
  }
}
