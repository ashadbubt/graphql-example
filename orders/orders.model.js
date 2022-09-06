const orders = [
    {
        date: '2005-05-05',
        subtotal:90.22,
        items:[{
            product: {
                id: 'redshow',
                description:'Old Red Show',
                price:45.11
            },
            quantity:2
        }]
    },
    {
        date: '2005-06-05',
        subtotal:80.22,
        items:[{
            product: {
                id: 'yellowjean',
                description:'Yellow  jean',
                price:40.11
            },
            quantity:2
        }]
    }
  ];

function  getAllOrders(){
    return orders;
}

module.exports = {
    getAllOrders
}