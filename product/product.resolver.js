const productModel = require('./product.model')

module.exports = {
    Query:{
        products:()=>{
            return productModel.getAllProduct();            
        },
        productByPrice: (_, args) =>{
            return  productModel.getproductByPrice(args.min, args.min);
        },
        product:(_, args)=>{
            return productModel.productById(args.ID);
        },

    },
    Mutation:{
        addNewProduct:(_, args)=>{
            return productModel.addNewProduct(args.id, args.description, args.price);
        },
        addNewProductReview:(_, args)=>{
            return productModel.addNewProductReview(args.id, args.rating, args.comment);
        }
    }
}