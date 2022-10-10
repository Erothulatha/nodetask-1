const express = require('express')
const router = express.Router()
const Blien = require('./blien')
router.get('/', async (req, res) => {

    try {
        const bliens = await Blien.find()
        res.json(bliens)
    }
    catch (err) {
        res.send('error' + err)
    }

})


router.get('/:id', async (req, res) => {

    try {
        const blien = await Blien.findById(req.params.id)
        res.json(blien)
    }
    catch (err) {
        res.send('error' + err)
    }
})








router.post('/', async (req, res) => {
    const blien = new Blien({
        name: req.body.name,
        branch: req.body.branch
    })
    try {
        const a1 = await blien.save()
        res.json(a1)
    } catch (err) {
        res.send('error')
    }
})



router.patch('/:id', async (req, res) => {

    try {
        const blien = await Blien.findById(req.params.id)
        blien.branch = req.body.branch
        const a1 = await blien.save()
        res.json(a1)
    }
    catch (err) {
        res.send('error')
    }
})



router.delete('/:id', async (req, res) => {

    try {
        await Blien.findByIdAndDelete(req.params.id)
      
        return res.json(await Blien.find())

    }
    catch (err) {
        res.send('error')
    }
})

module.exports = router