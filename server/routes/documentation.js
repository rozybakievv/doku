const express = require('express');
const router = express.Router();

// gets all the documentations
router.get('/', (req, res) => {
    res.json({ "message": "Get documentations"});
})

// need to get only 6 documentation filterd by recent and/or most popular etc

// creates a new documentation
router.post('/', (req, res) => {
    res.json({ "message": "Create documentation"});
})

// modifies a documentation
router.put('/:id', (req, res) => {
    res.json({ "message": `Update documentation ${req.params.id}`});
})

// modifies a documentation
router.delete('/:id', (req, res) => {
    res.json({ "message": `Update documentation ${req.params.id}`});
})

module.exports = router;