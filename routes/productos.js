var express = require('express');
const router = express.Router();
const Producto = require('../db/models/productos')

/* GET home page. */
router.get('/productos', function(req, res) {
  Producto.find()
    .then(productos => {
        res.send(productos)
    })
    .catch(err => {
        res.status(500).send(err)
    })
});

router.post('/producto', (req, res) => {
    const producto = new Producto(req.body)
    producto.save()
        .then(() => {
            res.send(producto)
        })
        .catch(err => {
            res.status(500).send(err)
            })
})


router.delete('/producto/:id', (req, res) => {
    const _id = req.params.id
    Producto.findByIdAndDelete(_id)
        .then(producto => {
            res.send(producto)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

module.exports = router;
