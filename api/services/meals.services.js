async function mapMeal(mealObject) {

    // Transform the meal object to match the Mongoose schema
const mappedMeal = {
    idMeal: mealObject.idMeal,
    name: mealObject.strMeal,
    category: mealObject.strCategory,
    area: mealObject.strArea,
    instructions: mealObject.strInstructions,
    imageUrl: mealObject.strMealThumb,
    tags: mealObject.strTags ? mealObject.strTags.split(',') : [],
    youtubeUrl: mealObject.strYoutube,
    ingredients: []
};

// Extract and push ingredients into the ingredients array
for (let i = 1; i <= 20; i++) {
    const ingredientName = mealObject[`strIngredient${i}`];
    const measure = mealObject[`strMeasure${i}`];
    if (ingredientName && measure) {
        // Split the measure into quantity and unit
        const measureParts = measure.split(' ');
        const quantity = measureParts[0];
        const unit = measureParts.slice(1).join(' '); // Join the remaining parts with a space
        mappedMeal.ingredients.push({ name: ingredientName, quantity, unit });
    }
}
    return mappedMeal
}

module.exports = {
    mapMeal
};