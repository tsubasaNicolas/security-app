import { Router } from "express";

const {
  getImagenes,
  saveImagenes,
  fileUpload,
  deleteImagen,
} = require("../controllers/imagenesController");

const router = Router();

router.get("/imagenes", getImagenes);

router.post("/imagenes", fileUpload, saveImagenes);

router.delete("/imagenes/:id", deleteImagen);

//export default router
export default router;
