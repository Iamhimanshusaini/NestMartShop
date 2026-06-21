const express = require("express");
const router = express.Router();
const upload = require("../midleware/imageUploded");
const cloudinary = require('../config/cloudinaryConfig');
const products = require("../data");
const productModel = require('../model_and_sehema/product')
// Multiple Images Upload
router.post(
    "/add-product",
    upload.array("images", 5),
    async (req, res) => {

        try {

            let imageUrls = [];

            // Upload All Images
            for (let i = 0; i < req.files.length; i++) {

                const result =
                    await cloudinary.uploader.upload(
                        req.files[i].path,
                        {
                            folder: "products"
                        }
                    );

                imageUrls.push(result.secure_url);

            }

            // Product Data
            const product = {

                productId: req.body.productId,

                productName: req.body.productName,

                category: JSON.parse(req.body.category),

                description: req.body.description,

                price: req.body.price,

                unit: req.body.unit,

                brand: req.body.brand,

                stock: req.body.stock,

                isAvailable: req.body.isAvailable,

                images: imageUrls,

                rating: req.body.rating,

                reviews: req.body.reviews,

                discount: req.body.discount,

                tags: JSON.parse(req.body.tags)

            };
            const saveProduct = await productModel.insertMany(product)
            console.log(product);

            res.status(201).json({
                success: true,
                message: "Product Added",
                product: saveProduct
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }
);

module.exports = router;