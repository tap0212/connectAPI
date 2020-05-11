const Location = require('../models/location')

//getLocationById,getAllLocations, createLocation, deleteLocation, updateLocation

exports.getLocationById = (req,res,next, id) => {
    Location.findById(id)
    .exec((err, location) => {
        if(err){
            return res.status(400).json({
                error: "No location found"
            })
        }
        req.location = location;
        next()
    })
}

exports.createLocation = (req, res) => {
    const location = new Location(req.body);
    location.save((err, location) => {
        if(err){
            return res.status(400).json({
                error:"Location save unsuccessful"
            })
        }
        res.json({location})
    })
}

exports.getLocation = (req, res) => {
    return res.json(req.location);
  };

  exports.getAllLocations = (req, res) => {
    Location.find().exec((err, locations) => {
      if (err) {
        return res.status(400).json({
          error: "NO location found"
        });
      }
      res.json(locations);
    });
  };


  exports.updateLocation = (req, res) => {
    const location = req.location;
    location.name = req.body.name;
  
    location.save((err, updatedLocation) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(updatedLocation);
    });
  };

  exports.deleteLocation = (req, res) => {
    const location = req.location;
  
    location.remove((err, location) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this location"
        });
      }
      res.json({
        message: "Successfully deleted"
      });
    });
  };
  