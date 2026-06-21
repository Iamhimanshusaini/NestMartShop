const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const productsRoute = require('./routes/productsRoute')
const app = express();
const PORT = 8080
const Route = require('express')
const productModel = require('./model_and_sehema/product')
const testProduct = require('./model_and_sehema/testmodel')
const fakedata = require('./data')
const shopByCategoryRoute = require('./routes/shopByCategoryRoute')
const allProductShop = require('./routes/allShopProducts')
const newOrder = require('./routes/newProductRoute')
const findoneproduct = require('./routes/findoneProduct')
const signupRoute = require('./routes/signupRoute')
const loginRoute = require('./routes/loginRoute')
const authCheck = require('./midleware/authCheck')
const newOrderRoute = require('./routes/newProductRoute')
const myOrdersRoute = require('./routes/findOrderUserRoute')
const updateProfileRoute = require('./routes/profileUpdateRoute')
const adminAllProduct = require('./routes/adminAllProducts')
const adminDeleteProduct = require('./routes/adminProductDelete')
const adminAddProduct = require('./routes/adminAddProduct')
const adminAllUsers = require('./routes/adminAllUsers')
const adminUserDelete = require('./routes/adminUserDelete')
const AdminOrders = require('./routes/adminOrders')
const adminAuth = require('./midleware/adminAuth')
const AdminDashboardRoute = require('./routes/adminDashboardRoute')
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://himanshudB:Anmol1234@zerodhacluster.i4j0g6l.mongodb.net/nestMartShop?appName=ZerodhaCluster')
    .then(() => {
        console.log('Db connected succesfuly')
    })
    .catch((err) => {
        console.log('not connected db')
        console.log(err.message)
    })



app.use('/api', productsRoute)
app.use('/api', shopByCategoryRoute)
app.use('/api', allProductShop)
app.use('/api', findoneproduct)
app.use('/api', signupRoute)
app.use('/api', loginRoute,)
app.use('/api', updateProfileRoute,)


app.use('/api', authCheck, myOrdersRoute)
app.use('/api', authCheck, newOrderRoute)

// admin pannel/dashboard Routes

app.use('/api', authCheck, adminAuth, AdminDashboardRoute)
app.use('/api', authCheck, adminAuth, adminAllProduct)
app.use('/api', authCheck, adminAuth, adminDeleteProduct)
app.use('/api', authCheck, adminAuth, adminAddProduct)
app.use('/admin/api', authCheck, adminAuth, adminAllUsers)
app.use('/admin/api', authCheck, adminAuth, adminUserDelete)
app.use('/admin/api', authCheck, adminAuth, AdminOrders)






// app.use('/api', newOrder)





// const productData = {
//     productId: "P001",
//     productName: "Tide Plus Detergent Washing Powder - 10kg Mega Saver Pack | Jasmine & Rose Fragrance | Removes deep-seated Oil, Gravy, Tea Stains | World's No. 1 Detergent Brand",
//     category: {
//         name: "Household",
//         color: "#f2fce4"
//     },
//     description: "Tide Plus Double Power has STAIN MAGNETS which remove the toughest of stains to give you stainless whites",
//     price: 825,
//     unit: "1kg",
//     brand: "Tide",
//     stock: 120,
//     isAvailable: true,
//     images: [
//         "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1778947554/tideMain_ld4p8i.jpg",
//         "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1778947824/tide2_ok9tis.jpg",
//         "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1778947823/tide1_tcszcs.jpg",
//         "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1778947825/tide3_gy2z8x.jpg",
//         "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1778947826/tide4_pr47xc.jpg"
//     ],
//     rating: 4.5,
//     reviews: 210,
//     discount: 5,
//     tags: ["New", "Hot", "Sale"]
// }
// const products = [
//     {
//         productId: "P01",
//         productName: "Amul Taaza Homogenised Toned Milk",
//         category: {
//             image: "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290540/922_1643384380004_gpswey.png",
//             name: "Dairy & Milk Products",
//             color: "#f2fce4"
//         },
//         description: "Fresh and creamy full cream milk enriched with calcium and protein.",
//         price: 77,
//         unit: "1L",
//         brand: "Amul",
//         stock: 150,
//         isAvailable: true,
//         images: [
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290342/botrl_xxyoeb.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290346/e7308860-89b9-4284-b595-dbb537dba9eb_mni5hz.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290341/177778cc-c88b-4d67-ad8a-d728927e6dbd_bxxcqi.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290340/3b70c20e-5d16-439c-a895-674df6f575b9_imqdwg.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290342/ba05a4c6-3564-4d3e-a5cf-62d9b9b03b30_je6sim.jpg"
//         ],
//         rating: 4.6,
//         reviews: 340,
//         discount: 5,
//         tags: ["Fresh", "Popular", "Best Seller"]
//     },

//     {
//         productId: "P02",
//         productName: "Bonn Low Fat White Bread",
//         category: {
//             image: "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290787/953_1657599742631_q2xtpf.png",
//             name: "Bakery & Breads",
//             color: "#ffe5ec"
//         },
//         description: "Soft and healthy brown bread packed with fiber goodness.",
//         price: 77,
//         unit: "400g",
//         brand: "Bonn",
//         stock: 90,
//         isAvailable: true,
//         images: [
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290786/9e9845dc-5935-4390-b562-c0d4d1dbad0a_s5kj80.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290786/9e9845dc-5935-4390-b562-c0d4d1dbad0a_s5kj80.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290786/9e9845dc-5935-4390-b562-c0d4d1dbad0a_s5kj80.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290786/9e9845dc-5935-4390-b562-c0d4d1dbad0a_s5kj80.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780290786/9e9845dc-5935-4390-b562-c0d4d1dbad0a_s5kj80.jpg"
//         ],
//         rating: 4.4,
//         reviews: 210,
//         discount: 10,
//         tags: ["Healthy", "Fresh", "Hot"]
//     },

//     {
//         productId: "P03",
//         productName: "Kellogg's Original Corn Flakes",
//         category: {
//             image: "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291103/954_1680251634382_vmng7l.png",
//             name: "Flakes & Kids Cereals ",
//             color: "#fff4cc"
//         },
//         description: "Light and healthy refined sunflower oil for everyday cooking.",
//         price: 180,
//         unit: "400g",
//         brand: "kawality",
//         stock: 110,
//         isAvailable: true,
//         images: [
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291104/rc-upload-1774510785186-53_xcw29i.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291105/rc-upload-1774510785186-54_oitkh5.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291105/rc-upload-1774510785186-54_oitkh5.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291105/rc-upload-1774510785186-54_oitkh5.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291105/rc-upload-1774510785186-54_oitkh5.jpg"
//         ],
//         rating: 4.5,
//         reviews: 180,
//         discount: 8,
//         tags: ["Healthy", "Sale", "Popular"]
//     },

//     {
//         productId: "P04",
//         productName: "Kellogg's Chocos Multigrain Moons & Stars Chocos",
//         category: {
//             image: "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291103/954_1680251634382_vmng7l.png",
//             name: "Flakes & Kids Cereals ",
//             color: "#e0f7fa"
//         },
//         description: "Kellogg’s Multigrain Chocos Moons & Stars is a nourishing & solid breakfast for kids. It makes milk chocolaty and delicious. Kellogg’s Multigrain Chocos Moons & Stars has the goodness of Whole Grain & is source of Fibre. It is high in Calcium & Protein that is essential for your child’s growing body.",
//         price: 165,
//         unit: "180g",
//         brand: "Tata Sampann",
//         stock: 140,
//         isAvailable: true,
//         images: [
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291344/710cb6ad284c47cdb8703a379fca23e9_udnfeb.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291344/710cb6ad284c47cdb8703a379fca23e9_udnfeb.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291344/710cb6ad284c47cdb8703a379fca23e9_udnfeb.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291344/710cb6ad284c47cdb8703a379fca23e9_udnfeb.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291344/710cb6ad284c47cdb8703a379fca23e9_udnfeb.jpg"
//         ],
//         rating: 4.7,
//         reviews: 275,
//         discount: 6,
//         tags: ["Protein Rich", "Healthy", "New"]
//     },

//     {
//         productId: "P05",
//         productName: "Amul Blend Diced Cheese",
//         category: {
//             image: "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291609/2253_1694001802103_lobx3z.png",
//             name: "Cheese",
//             color: "#fff0f5"
//         },
//         description: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.",
//         price: 120,
//         unit: "100g",
//         brand: "Amul",
//         stock: 300,
//         isAvailable: true,
//         images: [
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291608/0bd593b2-6433-4a3e-a71d-8964618c5074_jmh4rv.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291608/0bd593b2-6433-4a3e-a71d-8964618c5074_jmh4rv.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291608/0bd593b2-6433-4a3e-a71d-8964618c5074_jmh4rv.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291608/0bd593b2-6433-4a3e-a71d-8964618c5074_jmh4rv.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291608/0bd593b2-6433-4a3e-a71d-8964618c5074_jmh4rv.jpg"
//         ],
//         rating: 4.3,
//         reviews: 430,
//         discount: 3,
//         tags: ["Crunchy", "Hot", "Kids Favorite"]
//     },

//     {
//         productId: "P06",
//         productName: "Coca-Cola Soft Drink Family Pack",
//         category: {
//             image: "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291955/rc-upload-1770356946958-58_atsakk.jpg",
//             name: "Beverages & Soft Drinks",
//             color: "#ffe0b2"
//         },
//         description: "Refreshing soft drink with classic cola taste.",
//         price: 95,
//         unit: "2.25L",
//         brand: "Coca-Cola",
//         stock: 180,
//         isAvailable: true,
//         images: [
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291955/rc-upload-1770356946958-58_atsakk.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291955/rc-upload-1770356946958-58_atsakk.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291955/rc-upload-1770356946958-58_atsakk.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291955/rc-upload-1770356946958-58_atsakk.jpg",
//             "https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780291955/rc-upload-1770356946958-58_atsakk.jpg"
//         ],
//         rating: 4.5,
//         reviews: 510,
//         discount: 7,
//         tags: ["Cold Drink", "Party", "Popular"]
//     },

  

//     // Continue same format till P025
// ]
app.post('/addnew', async (req, res) => {
    try {
        const uploaded = await productModel.insertMany(products)
        res.json({
            message: 'product added',
            pro: uploaded
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`app runig port:${PORT}`)
})