const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {

  // FIND ALL CATEGORIES
  
  Category.findAll({
    include:[Product]})
  .then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {

  // FIND ONE CATEGORY
  
  Category.findOne({
    where: {id: req.params.id},
    include: Product})
  .then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {

  // CREATE A NEW CATEGORY

  Category.create({
    category_name: req.body.category_name})
  .then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {

  // UPDATE CATEGORY

  Category.update(req.body, {
    where: {id: req.params.id}})
  .then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {

  // DELETE A CATEGORY

  Category.destroy({
    where: {id: req.params.id}
  }).then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
