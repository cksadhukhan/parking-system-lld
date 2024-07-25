"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusFeeStrategy = void 0;
const ParkingFees_1 = require("../utils/ParkingFees");
class BusFeeStrategy {
    calculateFee(transaction) {
        const duration = (transaction.exitTime.getTime() - transaction.entryTime.getTime()) /
            (1000 * 60 * 60);
        return Number((duration * ParkingFees_1.ParkingFees.Bus).toFixed(2));
    }
}
exports.BusFeeStrategy = BusFeeStrategy;
