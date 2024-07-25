"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingTransaction = void 0;
class ParkingTransaction {
    constructor(vehicle, spot, entryTime) {
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = entryTime;
        this.exitTime = null;
        this.fee = null;
    }
}
exports.ParkingTransaction = ParkingTransaction;
