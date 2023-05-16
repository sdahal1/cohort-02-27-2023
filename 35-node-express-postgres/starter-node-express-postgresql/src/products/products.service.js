const knex = require("../db/connection");
const mapProperties = require("../utils/mapProperties")

const addSupplier = mapProperties({
    supplier_id: "supplier.supplier_id",
    supplier_name: "supplier.supplier_name",
    
});

function listAll() {
    // SELECT * FROM products
    return knex("products").select("*")
}

function listOutOfStockCountService() {
    // SELECT count(*) FROM products WHERE product_quantity_in_stock = 0 GROUP BY product_quantity_in_stock
    //past kelvin lied to me
    return knex("products")
        .count("product_quantity_in_stock")
        .where({ product_quantity_in_stock: '0',})
        .groupBy("product_quantity_in_stock")
}

function listPriceSummaryService() {
    //get min max avg price from each supplier
    // group by supplier id
    // SELECT min(product_price) max(product_price) avg(product_price) FROM products GROUP BY (supplier_id)
    return knex("products")
        .select("supplier_id as s")
        .min("product_price")
        .max("product_price")
        .avg("product_price")
        .groupBy("s")
}

function readService(product_id) {
    //join products and supplier
    //SELECT ("*") FROM products JOIN suppliers.id on products.supplier_id
    return knex("products as p")
        .select("*")
        .join("suppliers as s", "s.supplier_id", "p.supplier_id")
        .where({product_id})
        .first()
        .then(addSupplier)

}


module.exports = {
    listAll,
    listOutOfStockCountService,
    listPriceSummaryService,
    readService,
};