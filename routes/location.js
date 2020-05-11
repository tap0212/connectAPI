const express = require('express')
const router = express.Router()

const {getLocationById,getLocation,getAllLocations, createLocation, deleteLocation, updateLocation} = require('../controllers/location')


router.param("locationId", getLocationById)
router.get('/locations', getAllLocations)
router.get('/location/:locationId', getLocation)
router.post("/location/create", createLocation)
router.delete("/location/:locationId", deleteLocation)
router.put('/location/:locationId', updateLocation)

module.exports = router;