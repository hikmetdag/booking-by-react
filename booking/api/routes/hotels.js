import express from 'express';
import {
   countByType,
   createHotel,
   deleteHotel,
   getHotel,
   getHotels,
   updateHotel,
   getAll
} from "../controllers/hotelController.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
// router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/getAll", getAll);


export default router;