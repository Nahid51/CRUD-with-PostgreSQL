# Build a CRUD REST API with Node.js, Express.js, PostgreSQL & NeonDB

## Project Overview

This project demonstrates how to build a simple CRUD (Create, Read, Update, Delete) REST API using Node.js and Express.js, with PostgreSQL as the database, hosted on NeonDB. The API manages products and provides endpoints to create, retrieve, update, and delete product records.

### Features
- Node.js & Express.js backend
- PostgreSQL database integration
- NeonDB cloud database hosting
- Modular code structure (controllers, models, routes, lib)
- RESTful API endpoints for product management

### Folder Structure
```
index.js
package.json
controllers/
  product.controller.js
lib/
  db.js
models/
  product.model.js
routes/
  product.route.js
```

### Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/Nahid51/CRUD-with-PostgreSQL.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Configure your PostgreSQL connection in `lib/db.js`.
4. Start the server:
   ```
   node index.js
   ```

### Useful Links
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [NeonDB Documentation](https://neon.tech/docs)
- [Project GitHub Repository](https://github.com/Nahid51/CRUD-with-PostgreSQL)
- [Project Products](https://crud-with-postgre-sql.vercel.app/products)

### API Endpoints
| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | /products          | Get all products           |
| GET    | /products/:id      | Get product by ID          |
| POST   | /products/create   | Create a new product       |
| PUT    | /products/:id      | Update a product by ID     |
| DELETE | /products/:id      | Delete a product by ID     |

---

Feel free to contribute or open issues on GitHub!
