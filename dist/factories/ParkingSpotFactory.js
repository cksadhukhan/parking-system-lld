"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSpotFactory = void 0;
const ParkingSpot_1 = require("../models/ParkingSpot");
class ParkingSpotFactory {
    createSpot(id, size) {
        return new ParkingSpot_1.ParkingSpot(id, size);
    }
}
exports.ParkingSpotFactory = ParkingSpotFactory;
