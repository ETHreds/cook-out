import { AuthService, MealService } from "@/services/backend.services";

const state = {
    token: null,
    user: null, // New property to store user data
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setUser(state, user) {
        state.user = user;
    },
};

const actions = {
    async signIn({ commit }, credentials) {
        try {
            const response = await AuthService.signIn(credentials);
            const { token, user } = response; 
            commit('setToken', token);
            commit('setUser', user);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async signUp(context, user) {
        try {
            return await AuthService.signUp(user);
        } catch (error) {
            throw error;
        }
    },
    async saveMeal({ state }, mealId) {
        try {
            if (!state.token) {
                throw new Error('User not authenticated');
            }
            await MealService.saveMeal(mealId, state.token);
        } catch (error) {
            throw error;
        }
    },
};

const getters = {
    isAuthenticated(state) {
        return state.token !== null;
    },
    getUser(state) {
        return state.user;
    },
};

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
};
