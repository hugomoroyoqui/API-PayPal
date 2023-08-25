try {
    let kartController = {};

    kartController.getInKart = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT kart_id " +  
                "FROM kart WHERE status = 1 AND order_id IS NULL AND user_id = '"+req.params.user_id+"' GROUP BY product_id;",
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

    kartController.getProductsInKart = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT k.kart_id, k.user_id, k.product_id, SUM(k.quantity) as quantity, SUM(k.now_price) as now_price, k.order_id, k.status, k.created_date, p.name, p.price, p.image, p.stock " +  
                "FROM kart k INNER JOIN products p " +
                "ON k.product_id = p.product_id WHERE k.status = 1 AND p.status = 1 AND k.order_id IS NULL AND k.user_id = '"+req.params.user_id+"' "+
                "GROUP BY k.product_id;",
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
                "SELECT k.kart_id, k.user_id, k.product_id, SUM(k.quantity) as quantity, SUM(k.now_price) as now_price, k.order_id, k.status, k.created_date, p.name, p.image " +  
                "FROM kart k INNER JOIN products p " +
                "ON k.product_id = p.product_id WHERE k.order_id = "+req.params.order_id+" GROUP BY k.product_id;",
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
                "UPDATE kart SET status = 0 WHERE product_id = "+req.body.product_id+";",
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
                "UPDATE kart SET status = 0, order_id = "+req.body.order_id+" WHERE order_id IS NULL AND status = 1;",
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