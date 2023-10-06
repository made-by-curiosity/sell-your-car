import axios from 'axios';

const BASE_URL = 'https://65205105906e276284c45427.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export const getAllCars = async () => {
  const res = await axios.get('/api/cars');

  return res.data;
};
