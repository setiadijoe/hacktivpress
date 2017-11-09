var express = require('express');
var router = express.Router();
const Article = require('../controllers/articlecontrollers')

router.get('/', Article.getAllArticles)
router.get('/:id', Article.getOneArticle)
router.post('/', Article.createAnArticle)

module.exports = router