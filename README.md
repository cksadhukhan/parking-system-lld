# Smart Parking Lot System

Low-level architecture for a backend system of a smart parking lot.

## Project Structure

```bash
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── factories
│   │   └── ParkingSpotFactory.ts
│   ├── index.ts
│   ├── models
│   │   ├── ParkingSpot.ts
│   │   ├── ParkingTransaction.ts
│   │   └── Vehicle.ts
│   ├── repositories
│   │   └── ParkingLotRepository.ts
│   ├── services
│   │   └── ParkingLotService.ts
│   ├── strategies
│   │   ├── BusFeeStrategy.ts
│   │   ├── CarFeeStrategy.ts
│   │   ├── FeeCalculationStrategy.ts
│   │   └── MotorcycleFeeStrategy.ts
│   └── utils
│       └── ParkingFees.ts
└── tsconfig.json
```

## Models

### ParkingSpot

The `ParkingSpot` model represents a parking spot in the parking lot.

- **Attributes:**
  - `id`: Unique identifier for the parking spot.
  - `size`: The type of vehicle the spot can accommodate (`Motorcycle`, `Car`, `Bus`).
  - `isAvailable`: Boolean indicating if the spot is currently available.

**File:** `src/models/ParkingSpot.ts`

### Vehicle

The `Vehicle` model represents a vehicle that can park in the parking lot.

- **Attributes:**
  - `numberPlate`: Unique identifier for the vehicle.
  - `type`: The type of the vehicle (`Motorcycle`, `Car`, `Bus`).

**File:** `src/models/Vehicle.ts`

### ParkingTransaction

The `ParkingTransaction` model represents a parking transaction when a vehicle enters or exits a parking spot.

- **Attributes:**
  - `vehicle`: The vehicle involved in the transaction.
  - `spot`: The parking spot used by the vehicle.
  - `entryTime`: The time the vehicle entered the parking spot.
  - `exitTime`: The time the vehicle left the parking spot (null if still parked).
  - `fee`: The calculated fee for the parking duration (null if still parked).

**File:** `src/models/ParkingTransaction.ts`

## Scripts

The following scripts are available to manage and run the project:

### Build

To compile TypeScript files to JavaScript, run:

```bash
npm run build
```

This command uses the TypeScript compiler (`tsc`) and outputs the compiled files to the dist directory.

### Development

To run the TypeScript source code directly (without compiling), use:

```bash
npm run dev
```

This command uses `ts-node` to execute the TypeScript files in `src/index.ts`.

### Start

To run the compiled JavaScript code, first ensure you have built the project. Then execute:

```bash
npm start
```

This command runs the compiled JavaScript file from the `dist` directory.

## Installation

#### Clone the repository:

```bash
git clone git@github.com:cksadhukhan/parking-system-lld.git
cd parking-system-lld
```

#### Install dependencies:

```bash
npm install
```

#### Build the project:

```bash
npm run build
```

#### Run the application in development mode:

```bash
npm run dev
```

#### Run the compiled application:

```bash
npm start
```
