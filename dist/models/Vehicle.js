"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = exports.VehicleType = void 0;
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Motorcycle"] = 0] = "Motorcycle";
    VehicleType[VehicleType["Car"] = 1] = "Car";
    VehicleType[VehicleType["Bus"] = 2] = "Bus";
})(VehicleType || (exports.VehicleType = VehicleType = {}));
class Vehicle {
    constructor(numberPlate, type) {
        this.numberPlate = numberPlate;
        this.type = type;
    }
}
exports.Vehicle = Vehicle;
