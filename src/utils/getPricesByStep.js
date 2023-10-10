import { normalizeRentalPrice } from './normalizeRentalPrice';

export const getPricesByStep = (cars, step) => {
  const availablePrices = cars.map(car =>
    normalizeRentalPrice(car.rentalPrice)
  );

  const maxPrice = Math.max(...availablePrices);
  const minPrice = Math.ceil(Math.min(...availablePrices) / 10) * 10;

  const pricesArray = [];

  for (let i = minPrice; i <= maxPrice; i += step) {
    pricesArray.push(i);
  }

  return pricesArray;
};
