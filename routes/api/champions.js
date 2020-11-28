const express = require('express');
const router = express.Router();

// Champion Model
const champion = require('../../models/champion');

// @route GET api/champions
// @desc Get All champions
// @access Public
router.get('/', (req, res) => {
    champion.find()
        .sort({ _id: -1})
        .then(champions => res.json(champions))
});

// @route POST api/champions
// @desc Create a champion
// @access Public
router.post('/', (req, res) => {
    const newChampion = new champion({
        name: req.body.name,
        title: req.body.title,
        lore: req.body.lore,
        imageURL: req.body.imageURL
    });

    newChampion.save().then(Champion => res.json(Champion));
});

// @route Delete api/champions/:id
// @desc Delete a champion
// @access Public
router.delete('/:id', (req, res) => {
   champion.findById(req.params.id)
        .then(Champion => Champion.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success: false}));
    });




module.exports = router; 