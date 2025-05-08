import axios from 'axios';

const API_BASE_URL = 'https://api.productionurl.com/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchTouristDestinations = async () => {
  try {
    const response = await apiClient.get('/tourist-destinations/');
    return response.data;
  } catch (error) {
    console.error('Error fetching tourist destinations:', error);
    throw error;
  }
};

export const fetchEvents = async () => {
  try {
    const response = await apiClient.get('/events/');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const fetchTestimonials = async () => {
  try {
    const response = await apiClient.get('/testimonials/');
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};
