import axios from 'axios';

const BASE_URL = 'https://65205105906e276284c45427.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export const getAllCars = async (page = 1, limit = 8) => {
  const res = await axios.get(`/api/cars?page=${page}&limit=${limit}`);

  return res.data;
};
