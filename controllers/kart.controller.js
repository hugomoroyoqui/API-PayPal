try {
    let kartController = {};

    kartController.getProductsInKart = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT k.*, p.name, p.price, p.image, p.stock " +  
                "FROM kart k INNER JOIN products p " +
                "ON k.product_id = p.product_id WHERE k.status = 1 AND p.status = 1 AND k.order_id = NULL AND k.user_id = '"+req.params.user_id+"';",
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

    kartController.getProductsOfOrder = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT k.*, p.name, p.image " +  
                "FROM kart k INNER JOIN products p " +
                "ON k.product_id = p.product_id WHERE k.order_id = "+req.params.order_id+";",
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

    kartController.addToKart = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO kart (product_id, user_id, quantity, now_price) VALUES " + 
                "("+req.body.product_id+", '"+req.body.user_id+"', "+req.body.quantity+", "+req.body.now_price+");",
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

    kartController.deleteProductInKart = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE kart SET status = 0 WHERE kart_id = "+req.body.kart_id+";",
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

    kartController.assignOrderToProducts = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE kart SET status = 0, order_id = "+req.body.order_id+" WHERE order_id = NULL AND status = 1;",
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
    
    module.exports = kartController;
} catch (error) {
    
}