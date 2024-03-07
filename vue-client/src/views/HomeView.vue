<template>
    <div class="landing">
        <div>
            <h1>Meals</h1>
            <div>
                <h1> Top meals in {{ clientLocation }}</h1>
            </div>
            <div class="flex">
                <Card style="min-width: 25rem;" v-for="meal in meals" :key="meal.idMeal">
                    <template #title>{{ meal.strMeal }} - {{ meal.idMeal }}</template>
                    <template #content>
                        <img :alt="meal.strMeal" :src="meal.strMealThumb" />
                    </template>
                    <template #footer>
                        <div class="flex gap-3 mt-1">
                            <div>
                                <span>
                                    <i @click="handleSaveMeal(meal.idMeal)" class="pi pi-bookmark"></i>
                                </span><span>
                                    <i class="pi pi-share-alt"></i>
                                </span>
                            </div>
                            <router-link :to="`/meals/${meal.idMeal}`" class="w-full">
                                <Button label="Recipe" class="w-full" />
                            </router-link>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { fetchMealsByClientLocation, MealService } from '@/services/backend.services';

const meals = ref([]);
const clientLocation = ref(''); 

import { useStore } from 'vuex'; 

const store = useStore();
onMounted(async () => {
    try {
        meals.value = await fetchMealsByClientLocation();
    } catch (error) {
        // Handle error
    }
});

const handleSaveMeal = async (mealId) => {
    try {
        const token = store.state.auth.token;
        if (!token) {
            throw new Error('User not authenticated');
        }
        await MealService.saveMeal(mealId, token);
        console.log('Meal saved successfully');
    } catch (error) {
        console.error('Error saving meal:', error);
    }
};
</script>


<style scoped>
/* Add your styles here */
</style>
