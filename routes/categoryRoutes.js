import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// routes
//create route
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update route

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get all category
router.get("/get-category", categoryController);

// get single category
router.get("/single-category/:slug", singleCategoryController);

// delete category

router.delete("/delete-category/:id", deleteCategoryController);

export default router;
