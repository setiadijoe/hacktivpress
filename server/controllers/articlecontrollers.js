const Article = require('../models/articles')

function getAllArticles (req, res) {
  Article.find()
  .then(article => {
    console.log('liat semua artikel')
    res.status(200).send(article)
  })
  .catch(err => res.status(400).send(err))
}

function getOneArticle (req, res) {
  Article.findById(req.params.id)
  .then(article => {
    console.log('liat satu artikel')
    res.status(200).send(article)
  })
  .catch(err => res.status(400).send(err))
}

function createAnArticle (req, res) {
  let article = new Article(req.body)
  article.save()
  .then(newArticle => {
    console.log('article baru')
    res.status(200).send({newArticle, message: 'new Article'})
  })
  .catch(err => res.status(400).send(err))
}

module.exports = {
  getAllArticles,
  getOneArticle,
  createAnArticle
}