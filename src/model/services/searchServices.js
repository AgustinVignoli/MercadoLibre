import axios from 'axios';

const url = '/api';
export const loadProductDetail = id => axios.get(`${url}/items/${id}`);
export const loadResults = search => axios.get(`${url}/items?search=${search}`);
