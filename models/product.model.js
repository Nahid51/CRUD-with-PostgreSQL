const { client } = require('../lib/db.js');

// Product Model: DB queries for products
const ProductModel = {
    async getAll() {
        const res = await client.query('SELECT * FROM products');
        return res.rows;
    },
    async getById(id) {
        const res = await client.query('SELECT * FROM products WHERE id = $1', [id]);
        return res.rows[0];
    },
    async create({ name, price }) {
        const res = await client.query(
            'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *', [name, price]
        );
        return res.rows[0];
    },
    async update(id, { name, price }) {
        const res = await client.query(
            'UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *',
            [name, price, id]
        );
        return res.rows[0];
    },
    async delete(id) {
        const res = await client.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
        return res.rows[0];
    },
};

module.exports = ProductModel;
