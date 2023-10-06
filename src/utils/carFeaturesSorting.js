import { generateRandomNumber } from './generateRandomNumber';

export const filterFeatures = (...features) => {
  const randomIndexOfFeature = generateRandomNumber(0, features.length - 1);

  return features[randomIndexOfFeature];
};
