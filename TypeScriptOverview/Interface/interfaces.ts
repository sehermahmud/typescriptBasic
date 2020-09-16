interface Vehicle {
  name: string;
  years: number;
  broken: boolean;
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  years: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
};

printVehicle(oldCivic);
