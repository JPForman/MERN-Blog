const router = require('express').Router();
let BlogEntry = require('../models/blogEntry.model');

router.route('/').get((req, res) => {
  BlogEntry.find()
    .then(blogEntries => res.json(blogEntries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;
  const github = req.body.github;
  // const additionalLinks = req.body.additionalLinks;
  // const img = req.body.img;

  const newBlogEntry = new BlogEntry({
    title,
    description,
    date,
    github,
    // additionalLinks,
    // img,
  });

  newBlogEntry.save()
    .then(() => res.json('Blog Entry Added, whatup'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  BlogEntry.findById(req.params.id)
    .then(blogEntry => res.json(blogEntry))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  BlogEntry.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blog Entry Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  BlogEntry.findById(req.params.id)
    .then(blogEntry => {
      blogEntry.title = req.body.title;
      blogEntry.description = req.body.description;
      blogEntry.date = Date.parse(req.body.date);
      blogEntry.github = req.body.github;

      blogEntry.save()
        .then(() => res.json('Blog Entry Updated Yo'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
});

module.exports = router;