try {
    const express = require('express');
    const router = express.Router();
    const ordersController = require('../controllers/orders.controller');
    
    router.get('/', ordersController.getAllOrders);
    router.post('/', ordersController.addOrder);
    
    module.exports = router;   
} catch (error) {
    
}