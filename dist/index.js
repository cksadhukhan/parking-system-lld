"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParkingLotRepository_1 = require("./repositories/ParkingLotRepository");
const ParkingSpotFactory_1 = require("./factories/ParkingSpotFactory");
const Vehicle_1 = require("./models/Vehicle");
const CarFeeStrategy_1 = require("./strategies/CarFeeStrategy");
const MotorcycleFeeStrategy_1 = require("./strategies/MotorcycleFeeStrategy");
const BusFeeStrategy_1 = require("./strategies/BusFeeStrategy");
const ParkingLotService_1 = require("./services/ParkingLotService");
const moment_1 = __importDefault(require("moment"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const repository = new ParkingLotRepository_1.ParkingLotRepository();
    const spotFactory = new ParkingSpotFactory_1.ParkingSpotFactory();
    const feeStrategies = new Map();
    feeStrategies.set(Vehicle_1.VehicleType.Car, new CarFeeStrategy_1.CarFeeStrategy());
    feeStrategies.set(Vehicle_1.VehicleType.Motorcycle, new MotorcycleFeeStrategy_1.MotorcycleFeeStrategy());
    feeStrategies.set(Vehicle_1.VehicleType.Bus, new BusFeeStrategy_1.BusFeeStrategy());
    const parkingLotService = new ParkingLotService_1.ParkingLotService(repository, spotFactory, feeStrategies);
    // Adding parking spots
    repository.addSpot(spotFactory.createSpot("CAR_SPOT_1", Vehicle_1.VehicleType.Car));
    repository.addSpot(spotFactory.createSpot("MOTO_SPOT_1", Vehicle_1.VehicleType.Motorcycle));
    repository.addSpot(spotFactory.createSpot("BUS_SPOT_1", Vehicle_1.VehicleType.Bus));
    // Checking in a vehicle
    const vehicle = new Vehicle_1.Vehicle("WB01AB1234", Vehicle_1.VehicleType.Car);
    const transaction = parkingLotService.checkIn(vehicle);
    if (transaction) {
        console.log(`Vehicle checked in: ${transaction.vehicle.numberPlate} at spot ${transaction.spot.id}`);
    }
    // Checking out a vehicle
    const exitTime = "26-Jul-2024 02:06:00";
    const completedTransaction = parkingLotService.checkOut(vehicle.numberPlate, (0, moment_1.default)(exitTime, "DD-MMM-YYYY HH:mm:ss").toDate());
    if (completedTransaction) {
        console.log(`Vehicle checked out: ${completedTransaction.vehicle.numberPlate} from spot ${completedTransaction.spot.id}`);
        console.log(`Fee: INR ${completedTransaction.fee}`);
    }
}))();
