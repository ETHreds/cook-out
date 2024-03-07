<template>
    <div class="recipe-container">
      <RecipeVue :recipe="recipe" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { fetchMealDetails } from '@/services/backend.services';
  import RecipeVue from '@/components/RecipeVue.vue';
  import { useRoute } from 'vue-router';

const route = useRoute();
  
  const recipe = ref(null);
  
  onMounted(async () => {
    try {
      const mealId = route.params.mealId;
      recipe.value = await fetchMealDetails(mealId);
      console.log(recipe.value)
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  });
  </script>
  