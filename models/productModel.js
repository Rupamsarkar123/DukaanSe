import mongoose from "mongoose";

// Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category", // Referencing the Category model
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer, // Storing image data
      contentType: String, // Format of the image (e.g., 'image/png')
    },
    shipping: {
      type: Boolean, // if shipping is available for the product or not
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export default mongoose.model("Products", productSchema);
