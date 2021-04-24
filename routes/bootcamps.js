const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({success:true, msg:'Ver todo bootcamps'});
});

router.get('/:id',(req,res) => {
    res.status(200).json({success:true, msg:`ver bootcamp ${req.params.id}`});
});

router.post('/',(req,res) => {
    res.status(200).json({success:true, msg:'crear nuevo bootcamp'});
});

router.put('/:id', (req,res) => {
    res.status(200).json({success:true, msg:`Actualizar bootcamp ${req.params.id}`});
});

router.delete('/:id', (req,res) => {
    res.status(200).json({success:true, msg:`Delet bootcamp ${req.params.id}`});
});

module.exports = router;