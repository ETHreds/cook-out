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
                                    <i class="pi pi-bookmark"></i>
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
import { fetchMealsByClientLocation, fetchMealDetails } from '@/services/backend.services';

const meals = ref([]);
const clientLocation = ref(''); // Update with actual client location if available
const router = useRouter(); // Move useRouter inside the setup()

onMounted(async () => {
    try {
        meals.value = await fetchMealsByClientLocation();
    } catch (error) {
        // Handle error
    }
});

const viewRecipe = async (mealId) => {
    try {
        const mealDetails = await fetchMealDetails(mealId);
        console.log(mealDetails)
        console.log(router.push({ name: 'mealDetails', params: { mealName: getFormattedMealName(mealDetails.strMeal) } }));
    } catch (error) {
        // Handle error
    }
};

const getFormattedMealName = (mealName) => {
    return mealName.replace(/\s+/g, '-');
};
</script>


<style scoped>
/* Add your styles here */
</style>
