const router = require('express').Router();
const Recipe = require('../../models/Recipe');
// const withAutH = require('../utils/auth');

// DELETE recipe with specified name
router.delete('/:id', async (req, res) => {
  const recipeId = req.params.id;
  try {
    const responseData = await Recipe.destroy({
      where: {
        id: recipeId,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all recipes
router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll();
    if (!recipeData) {
      res.status(404).json({ message: 'No recipes in the database!' });
      return;
    }
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one recipe
router.get('/:id', async (req, res) => {
    try {
      const recipeData = await Recipe.findByPk(req.params.id);
      if (!recipeData) {
        res.status(404).json({ message: 'No recipe with this id!' });
        return;
      }
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const newRecipe = await Recipe.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newRecipe);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const recipeData = await Recipe.update(
        {
          title: req.body.title,
          content: req.body.content
        },
        {
          where: {
            id: req.params.id,
          }
        }
      );
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
 

  module.exports = router;