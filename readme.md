# 🚀 Fastify + PostgreSQL + TypeScript API

A **production-ready** Fastify application using **PostgreSQL** and **TypeScript**, featuring:

- **Database Connection** with `pg-promise`
- **Database Migrations** with `node-pg-migrate`
- **JWT Authentication & Role-Based Access**
- **Custom Error Handling & Logging**
- **Security Best Practices** (Helmet, Rate Limiting)
- **Husky & Commitlint for Git Hooks**

---

## 📌 **1. Getting Started**

### **1.1. Clone the Repository**

```sh
git clone https://github.com/your-repo/fastify-pg-ts.git
cd fastify-pg-ts
```

### **1.2. Install Dependencies**

```sh
npm install
```

### **1.3. Configure Environment Variables**

Create a `.env` file in the root directory:

```ini
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fastify_db
DB_USER=postgres
DB_PASS=password
JWT_SECRET=supersecretkey
JWT_REFRESH_SECRET=refreshsupersecretkey
LOG_LEVEL=info
```

---

## 📌 **2. Database Setup**

### **2.1. Start PostgreSQL**

If using Docker, run:

```sh

docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

### **2.2. Run Database Migrations**

```sh

npx node-pg-migrate up
```

### **2.3. Seed Initial Data (Optional)**

```sh
psql -U postgres -d fastify_db -f seeds.sql
```

---

## 📌 **3. Running the Application**

### **3.1. Start the Server**

```sh
npm run dev
```

> **The server will start at:** `http://localhost:3000`

### **3.2. API Endpoints**

#### **Authentication**

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | `/users/register` | Register a new user |
| POST | `/users/login` | Login and receive JWT tokens |
| POST | `/users/refresh-token` | Refresh JWT token |

#### **User Routes (Protected)**

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | `/users/profile` | Get authenticated user profile |
| GET | `/users/:id` | Get user by ID |

> Use `Authorization: <token>` in headers for protected routes.

---

## 📌 **4. Code Quality & Security**

### **4.1. Run Linter**

```sh
npm run lint
```

### **4.2. Run Prettier Formatting**

```sh
npm run format
```

### **4.3. Pre-Commit Hooks (Husky)**

```sh
npm run prepare  # Install Husky
```

> Husky runs `ESLint` & `Prettier` before every commit.

### **4.4. Run Tests** (Coming Soon)

```sh
npm run test
```

---

## 📌 **5. Logging & Error Handling**

- Uses **Pino** for structured logging.
- Logs **API errors** & **server crashes**.
- **Custom Error Handler** ensures consistent responses.

Example Error Response:

```json
{
  "success": false,
  "message": "User not found"
}
```

---

## 📌 **6. Deployment**

### **6.1. Build the Application**

```sh
npm run build
```

### **6.2. Start in Production Mode**

```sh
npm start
```

### **6.3. Run in Docker**

```sh
docker build -t fastify-app .
docker run -p 3000:3000 fastify-app
```

---

## 📌 **7. Next Steps**

- ✅ **Redis Caching** for performance optimization.
- ✅ **GraphQL Support**.
- ✅ **Rate Limiting** for API protection.
- ✅ **CI/CD Pipeline (GitHub Actions)**.

---

## 📌 **8. Contributors**

🚀 Maintained by **Harish Mahamure**

🤝 Feel free to contribute or suggest improvements!

📧 Contact: `hmahamure10@gmail.com`

---

## 📌 **9. License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
