try {
    let ordersController = {};

    ordersController.getAllOrders = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT * FROM orders WHERE status = 1 ORDER BY creation_date DESC;",
                (err, rows) => {
                    if(err){
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    ordersController.addOrder = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO orders (user_id, paypal_order_id, paypal_payer_id, paypal_payer_email, paypal_country, paypal_currency, paypal_amount) VALUES " + 
                "('"+req.body.user_id+"', '"+req.body.paypal_order_id+"', '"+req.body.paypal_payer_id+"', '"+req.body.paypal_payer_email+"', '"+req.body.paypal_country+"', "+
                "'"+req.body.paypal_currency+"', "+req.body.paypal_amount+");",
                (err, rows) => { 
                    if(err){
                        res.status(500).json(err);
                    } else { 
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };


    module.exports = ordersController;
} catch (error) {
    
}