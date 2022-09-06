const products = [
    {
        id: 'redshow',
        description: 'Red Show',
        price: 42.12,
        reviews:[]
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 42.12,
        reviews:[]
    },
    {
        id: 'yellowjean',
        description: 'Yellow Jeans',
        price: 52.12,
        reviews:[]
    }
]

function  getAllProduct(){
    return products;
}

function getproductByPrice(min, max){
    return products.filter((product)=>{
        return product.price >= min && product.price <= max;
    });
}

function productById(id){
    return products.find((product)=>{
        return  product.id == id;
    })
}

function addNewProduct(id , description, price){
    const newProduct = {
        id:id,
        price:price,
        description:description,
        reviews:[]
    }
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id , rating, comment){
    const matchProduct = productById(id);
    if(matchProduct){
        const newProductReview = {
            rating,
            comment
        }
        matchProduct.reviews.push(newProductReview);
        return newProductReview;
    }
}


module.exports = {
    getAllProduct,
    getproductByPrice,
    productById,
    addNewProduct,
    addNewProductReview
}