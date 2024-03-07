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

export const AuthService = {
    async signUp(user) {
      try {
        const response = await axios.post(`${BASE_URL}/email-signup`, user);
        console.log(response.data)
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async signIn(credentials) {
      try {
          const response = await axios.post(`${BASE_URL}/email-signin`, credentials);
          return response.data;
      } catch (error) {
          throw error;
      }
  }
};

export const MealService = {
  async saveMeal(mealId, token) {
    try {
        if (!token) {
            throw new Error('User not authenticated');
        }

        const response = await axios.post(`${BASE_URL}/meals/${mealId}`, null, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error saving meal:', error);
        throw error;
    }
  }
};

