// @desc    Get all bootcamps
// @route  GET api/v1/bootcamps
// @access  public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success:true, msg:'Ver todo bootcamps'});
}

// @desc    Get single bootcamp
// @route  GET api/v1/bootcamps/:id
// @access  public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:`ver bootcamp ${req.params.id}`});
}


// @desc    create new bootcamp
// @route  POST api/v1/bootcamps
// @access private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:'crear nuevo bootcamp'});
}

// @desc    Update bootcamp
// @route  PUT api/v1/bootcamps/:id
// @access private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:`Actualizar bootcamp ${req.params.id}`});
}

// @desc    delete bootcamp
// @route  DELETE api/v1/bootcamps/:id
// @access private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:`Delet bootcamp ${req.params.id}`});
}