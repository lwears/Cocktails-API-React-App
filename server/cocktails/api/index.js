const express = require('express');

const router = express.Router();
const axios = require('axios');

const formatObject = (obj) => {
  const ingredients = [];
  const measurements = [];
  const needs = [];

  Object.keys(obj).forEach((key) => {
    if (obj[key] && key.includes('strIngredient')) {
      ingredients.push(obj[key]);
    }
    if (obj[key] && key.includes('strMeasure') && obj[key].match(/[a-zA-Z0-9]/i)) {
      measurements.push(obj[key]);
    }
  });

  for (let i = 0; i < ingredients.length; i += 1) {
    const ingredient = ingredients[i] ? ingredients[i] : '';
    const measurement = measurements[i] ? measurements[i] : '';
    needs.push(`${measurement} ${ingredient}`);
  }

  return {
    id: obj.idDrink,
    name: obj.strDrink,
    category: obj.strCategory,
    alcoholic: obj.strAlcoholic,
    glass: obj.strGlass,
    instructions: obj.strInstructions,
    img: obj.strDrinkThumb,
    needs,
  };
};


// Get Specific Cocktail, /api/cocktails/:nameOfCocktail
router.get('/cocktails/:cocktail', async (req, res) => {
  const initialResult = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.cocktail}`);
  const result = initialResult.data.drinks.map((drink) => (formatObject(drink)));
  res.json(result);
});

// Get Specific Cocktail, /api/CocktailID
router.get('/:cocktailID', async (req, res) => {
  const initialResult = await axios.get(`  https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.cocktailID}`);
  const result = formatObject(initialResult.data.drinks[0]);
  res.json(result);
});

router.get('/ingredients/:ingredient', async (req, res) => {
  const initialResult = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${req.params.ingredient}`);
  const result = initialResult.data.drinks.map((drink) => (formatObject(drink)));
  res.json(result);
});

// Get Random cocktail
router.get('/cocktails/random', async (req, res) => {
  const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  res.json(result.data);
});

module.exports = router;
