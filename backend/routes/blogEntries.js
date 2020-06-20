const router = require('express').Router();
let BlogEntry = require('../models/blogEntry.model');

router.route('/').get((req, res) => {
  BlogEntry.find()
    .then(blogEntries => res.json(blogEntries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('add').post((req, res) => {
  const blogEntry = req.body.blogEntry;

  const newBlogEntry = new BlogEntry({blogEntry});

  newBlogEntry.save()
    .then(() => res.json('Blog Entry Added, whatup'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;