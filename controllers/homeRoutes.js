const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Get all recipes and JOIN with user data
    const blogData = await Blog.findAll({
      where: { user_id: req.session.user_id}
    });

    // Serialize data so the template can read it
    let blogs;
    try {
      blogs = blogData.map((blog) => blog.get({ plain: true }));
    } catch (err) {
      blogs = [blogData.get({ plain: true })];
    }
    
    // Pass serialized data and session flag into template
    res.render('profile', { 
      blogs,
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

router.get('/update-post/:id', withAuth, async (req, res) => {

  const blogId = req.params.id;

  try {
    const blogDatum = await Blog.findByPk(blogId, {});

    // Serialize data so the template can read it
    blog = blogDatum.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('updatepost', { 
      blog, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/view-recipe/:id', withAuth, async (req, res) => {

  const blogId = req.params.id;

  try {
    const blogDatum = await Blog.findByPk(blogId, {});

    // Serialize data so the template can read it
    blog = blogDatum.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('viewrecipe', { 
      blog, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post-comment/:id', withAuth, async (req, res) => {

  try {
    const contentDatum = await Blog.findByPk(req.params.id, {});
   
    const commentData = await Comment.findAll({
      where: { blog_id: req.params.id}
    });
    // console.log(commentData);
    // console.log(contentDatum);


    // Serialize data so the template can read it
    content = contentDatum.get({ plain: true });
    let comments;
    try {
      comments = commentData.map((comments) => comments.get({ plain: true }));
    } catch (err) {
      comments = [commentData.get({ plain: true })];
    }

    // const userDatum = await User.findByPk(content.user_id);
    // user = userDatum.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('comment', { 
      content,
      comments,
      // user,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;