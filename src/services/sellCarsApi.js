import axios from 'axios';
import 'utils/constants';
import { BASE_URL, PAGE, PER_PAGE } from 'utils/constants';

axios.defaults.baseURL = BASE_URL;

export const getAllCarsPerPage = async (page = PAGE, limit = PER_PAGE) => {
  const res = await axios.get(`/api/cars?page=${page}&limit=${limit}`);

  return res.data;
};

export const getAllCars = async () => {
  const res = await axios.get(`/api/cars`);

  return res.data;
};
