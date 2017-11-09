var express = require('express');
var router = express.Router();
const Article = require('../controllers/articlecontrollers')

router.get('/', Article.getAllArticles)
router.get('/:id', Article.getOneArticle)
router.post('/', Article.createAnArticle)
router.put('/:id', Article.editAnArticle)
router.get('/:author', Article.getByAuthor)

module.exports = router