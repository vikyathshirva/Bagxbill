import asyncHandler from  'express-async-handler'
import Product from '../models/productModel.js'

/*
@desc Fetch all products
@route GET/api/products
@access Public
*/
const getProducts = asyncHandler(async (req , res) => {
    const products = await Product.find({})
    
    res.json(products)

})

/*
@desc Fetch single product
@route GET/api/products/:id
@access Public
*/

const getProductById = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id);

   if (product) {
     res.json(product);
   } else {
     res.status(404);
     throw new Error("Product not found");
   }
});


/*
@desc DELETE single product
@route DELETE/api/products/:id
@access Private/Admin
*/

const deleteProduct = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id);

   if (product) {
    await product.remove() 
    res.json({ Message : "Product removed"})    
   } else {
     res.status(404);
     throw new Error("Product not found");
   }
});


/*
@desc CREATE single product
@route POST/api/products/
@access Private/Admin
*/

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product ({
    name: 'Sample Name',
    price : 0,
    user : req.user._id,
    image : '/images/mouse.jpg',
    brand : 'sampleBrand',
    category : 'Sample Category',
    coutnInStock : 0,
    numReview : 0,
    description : 'Sample description'
  })


  const createProduct = await product.save()
  res.status(201).json(createProduct);
});



/*
@desc UPDATE single product
@route PUT/api/products/:id
@access Private/Admin
*/

const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    coutnInStock,
  } = req.body;

  const product = await Product.findById(req.params.id)

  if(product){

    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.coutnInStock = coutnInStock
    
      const updatedProduct = await product.save();
      res.json(updatedProduct);

  } else {
    res.status(404)
    throw new Error('Product Not found')
  }
});


export { getProducts, getProductById, deleteProduct,updateProduct,createProduct}