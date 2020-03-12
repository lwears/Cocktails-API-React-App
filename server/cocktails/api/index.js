const express = require('express');

const router = express.Router();
const axios = require('axios');

/*
Search cocktail by name
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

Search ingredient by name
https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Lookup full cocktail details by id
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

Lookup a random cocktail
https://www.thecocktaildb.com/api/json/v1/1/random.php

Search by ingredient
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

Filter by alcoholic
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

Filter by Category
https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
*/

// Get Specific Cocktail, /api/cocktails/:nameOfCocktail
router.get('/cocktails/:cocktail', async (req, res, next) => {
  const initialResult = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.cocktail}`);
  const result = initialResult.data.drinks.map((drink) => ({
    idDrink: drink.idDrink,
    strDrink: drink.strDrink,
    strCategory: drink.strCategory,
    strAlcoholic: drink.strAlcoholic,
    strGlass: drink.strGlass,
    strInstructions: drink.strInstructions,
    strDrinkThumb: drink.strDrinkThumb,
  }));
  res.json(result);
});

// Get Specific Cocktail, /api/CocktailID
router.get('/:cocktailID', async (req, res, next) => {
  const result = await axios.get(`  https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.cocktailID}`);
  res.json(result.data);
});

// Get Random cocktail
router.get('/cocktails/random', async (req, res, next) => {
  const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  res.json(result.data);
});

// Get Cocktail by ingredient
router.get('/ingredients/:ingredient', async (req, res, next) => {
  const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${req.params.ingredient}`);
  res.json(result.data);
});

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
