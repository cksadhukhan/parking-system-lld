"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLotRepository = void 0;
class ParkingLotRepository {
    constructor() {
        this.spots = [];
        this.transactions = [];
    }
    addSpot(spot) {
        this.spots.push(spot);
    }
    findAvailableSpot(vehicleType) {
        return (this.spots.find((spot) => spot.isAvailable && spot.size >= vehicleType) ||
            null);
    }
    addTransaction(transaction) {
        this.transactions.push(transaction);
    }
    findTransactionByVehicleNumberPlate(vehicleNumberPlate) {
        return (this.transactions.find((tx) => tx.vehicle.numberPlate === vehicleNumberPlate && !tx.exitTime) || null);
    }
}
exports.ParkingLotRepository = ParkingLotRepository;
