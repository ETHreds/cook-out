import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// Fetch meals by client location using client IP address
export const fetchMealsByClientLocation = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/meals?useClientIP=true`);
        return response.data;
    } catch (error) {
        console.error('Error fetching meals:', error);
        throw error;
    }
};

// Fetch meals by location provided by the user
export const filterMealsByLocation = async (location) => {
    try {
        const response = await axios.get(`${BASE_URL}/meals?location=${location}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching meals:', error);
        throw error;
    }
};

//Fetch full meal details by id
export const fetchMealDetails = async(mealId) => {
    try {
      const response = await axios.get(`${BASE_URL}/meals/${mealId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching meal details:', error);
      throw error;
    }
  }

