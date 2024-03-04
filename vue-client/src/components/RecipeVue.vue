<template>
    <div v-if="recipe" class="recipe-page">
      <div class="recipe-header">
        <h1>{{ recipe.strMeal }}</h1>
        <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="recipe-image" />
      </div>
  
      <div class="recipe-details">
        <h2>Ingredients</h2>
        <ul>
          <li v-for="(ingredient, index) in ingredientList" :key="index">
            {{ ingredient }}
          </li>
        </ul>
  
        <h2>Instructions</h2>
        <p>{{ recipe.strInstructions }}</p>
  
        <div class="additional-details">
          <p><strong>Cooking Time:</strong> {{ recipe.strMeal }}</p>
          <p><strong>Servings:</strong> {{ recipe.strCategory }}</p>
          <p><strong>Category:</strong> {{ recipe.strArea }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup props="props">
  import { defineProps } from 'vue';
  
  const props = defineProps(['recipe']);
  
  // Check if recipe is not null or undefined before accessing its properties
  if (props.recipe) {

    const ingredientList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = props.recipe[`strIngredient${i}`];
      const measure = props.recipe[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredientList.push(`${measure} ${ingredient}`);
      }
    }
  }
  </script>
  
  
  <style scoped>
  /* Add your styles here */
  </style>
  