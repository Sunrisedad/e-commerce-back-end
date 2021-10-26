const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {

  // FIND ALL TAGS
  
  Tag.findAll({
    include: [Product]})
  .then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {

  // FIND A SINGLE TAG BY ID
  
  Tag.findOne({
    where: {id: req.params.id},
    include: [Product]})
  .then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {

  // CREATE NEW TAG

  Tag.create({
    tag_name: req.body.tag_name})
  .then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {

  // UPDATE TAG

  Tag.update(req.body, {
    where: {id: req.params.id}})
  .then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {id: req.params.id}})
  .then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
