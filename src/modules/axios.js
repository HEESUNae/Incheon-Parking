import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://apis.data.go.kr/6280000/ICParkInfo',
});

export const API_KEY = process.env.REACT_APP_API_KEY;
