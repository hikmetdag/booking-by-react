import express from 'express';
import {
   countByType,
   createHotel,
   deleteHotel,
   getHotel,
   getByCity,
   updateHotel,
   getHotels
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


router.get("/countByCity", getByCity);
router.get("/countByType", countByType);
router.get("/getHotels", getHotels);



export default router;