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

function editAnArticle (req, res) {
  Article.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category
    }
  }, {new: true})
  .then(article => {
    res.status(200).send({
      article,
      message: 'An article has been edited'
    })
  })
  .catch(err => res.status(400).send(err))
}

function getByAuthor (req, res) {
  Article.findOne({author: req.params.author})
  .then(article => {
    res.status(200).send(article)
  })
  .catch(err => res.status(400).send(err))
}

module.exports = {
  getAllArticles,
  getOneArticle,
  createAnArticle,
  editAnArticle,
  getByAuthor
}