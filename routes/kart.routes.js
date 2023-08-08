try {
    const express = require('express');
    const router = express.Router();
    const kartController = require('../controllers/kart.controller');
    
    router.get('/user/:user_id/', kartController.getProductsInKart);
    router.get('/order/:order_id/', kartController.getProductsOfOrder);
    router.post('/user/', kartController.addToKart);
    router.put('/user/', kartController.deleteProductInKart);
    router.put('/order/', kartController.assignOrderToProducts);
    
    module.exports = router;   
} catch (error) {
    
}