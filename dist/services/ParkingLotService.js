"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLotService = void 0;
const ParkingTransaction_1 = require("../models/ParkingTransaction");
class ParkingLotService {
    constructor(repository, spotFactory, feeStrategies) {
        this.repository = repository;
        this.spotFactory = spotFactory;
        this.feeStrategies = feeStrategies;
    }
    checkIn(vehicle) {
        const availableSpot = this.repository.findAvailableSpot(vehicle.type);
        if (availableSpot) {
            availableSpot.isAvailable = false;
            const transaction = new ParkingTransaction_1.ParkingTransaction(vehicle, availableSpot, new Date());
            this.repository.addTransaction(transaction);
            return transaction;
        }
        return null;
    }
    checkOut(vehicleNumberPlate, exitTime) {
        const transaction = this.repository.findTransactionByVehicleNumberPlate(vehicleNumberPlate);
        if (transaction) {
            transaction.exitTime = exitTime;
            transaction.fee = this.calculateFee(transaction);
            transaction.spot.isAvailable = true;
            return transaction;
        }
        return null;
    }
    calculateFee(transaction) {
        const strategy = this.feeStrategies.get(transaction.vehicle.type);
        if (strategy) {
            return strategy.calculateFee(transaction);
        }
        throw new Error("Fee strategy not found");
    }
}
exports.ParkingLotService = ParkingLotService;
