import { ParkingLotRepository } from "./repositories/ParkingLotRepository";
import { ParkingSpotFactory } from "./factories/ParkingSpotFactory";
import { Vehicle, VehicleType } from "./models/Vehicle";
import { CarFeeStrategy } from "./strategies/CarFeeStrategy";
import { MotorcycleFeeStrategy } from "./strategies/MotorcycleFeeStrategy";
import { BusFeeStrategy } from "./strategies/BusFeeStrategy";
import { ParkingLotService } from "./services/ParkingLotService";
import moment from "moment";

(async () => {
  const repository = new ParkingLotRepository();
  const spotFactory = new ParkingSpotFactory();
  const feeStrategies = new Map<VehicleType, any>();
  feeStrategies.set(VehicleType.Car, new CarFeeStrategy());
  feeStrategies.set(VehicleType.Motorcycle, new MotorcycleFeeStrategy());
  feeStrategies.set(VehicleType.Bus, new BusFeeStrategy());

  const parkingLotService = new ParkingLotService(
    repository,
    spotFactory,
    feeStrategies
  );

  // Adding parking spots
  repository.addSpot(spotFactory.createSpot("CAR_SPOT_1", VehicleType.Car));
  repository.addSpot(
    spotFactory.createSpot("MOTO_SPOT_1", VehicleType.Motorcycle)
  );
  repository.addSpot(spotFactory.createSpot("BUS_SPOT_1", VehicleType.Bus));

  // Checking in a vehicle
  const vehicle = new Vehicle("WB01AB1234", VehicleType.Car);
  const transaction = parkingLotService.checkIn(vehicle);
  if (transaction) {
    console.log(
      `Vehicle checked in: ${transaction.vehicle.numberPlate} at spot ${transaction.spot.id}`
    );
  }

  // Checking out a vehicle
  const exitTime = "26-Jul-2024 02:06:00";
  const completedTransaction = parkingLotService.checkOut(
    vehicle.numberPlate,
    moment(exitTime, "DD-MMM-YYYY HH:mm:ss").toDate()
  );
  if (completedTransaction) {
    console.log(
      `Vehicle checked out: ${completedTransaction.vehicle.numberPlate} from spot ${completedTransaction.spot.id}`
    );
    console.log(`Fee: INR ${completedTransaction.fee}`);
  }
})();
