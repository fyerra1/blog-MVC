const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      recipes, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Get all recipes and JOIN with user data
    const recipeData = await Recipe.findAll({
      where: { user_id: req.session.user_id}
    });

    // Serialize data so the template can read it
    let recipes;
    try {
      recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    } catch (err) {
      recipes = [recipeData.get({ plain: true })];
    }
    
    // Pass serialized data and session flag into template
    res.render('profile', { 
      recipes,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/add-recipes', withAuth, (req, res) => {

  res.render('newrecipe', { 
    logged_in: req.session.logged_in
  });
});

router.get('/update-recipes/:id', withAuth, async (req, res) => {

  const recipeId = req.params.id;

  try {
    const recipeDatum = await Recipe.findByPk(recipeId, {});

    // Serialize data so the template can read it
    recipe = recipeDatum.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('updaterecipe', { 
      recipe, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/view-recipe/:id', withAuth, async (req, res) => {

  const recipeId = req.params.id;

  try {
    const recipeDatum = await Recipe.findByPk(recipeId, {});

    // Serialize data so the template can read it
    recipe = recipeDatum.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('viewrecipe', { 
      recipe, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;