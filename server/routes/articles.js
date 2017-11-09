var express = require('express');
var router = express.Router();
const Article = require('../controllers/articlecontrollers')
const Auth = require('../helper/auth')

router.get('/', Article.getAllArticles)
router.get('/:id', Article.getOneArticle)
router.post('/', Auth.hasLogin, Article.createAnArticle)
router.put('/:id', Auth.hasLogin, Article.editAnArticle)
router.get('/author/:author', Article.getByAuthor)
router.get('/category/:category', Article.getByCategory)
router.delete('/:id', Auth.hasLogin, Article.removeArticle)

module.exports = router