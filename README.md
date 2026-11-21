# 🚀 MongoDB with Express – Chat Application

A simple Chat Application built using **Node.js, Express.js, MongoDB, Mongoose and EJS** as part of my Web Development Learning Journey.

This project helped me understand how backend applications interact with MongoDB and how to perform CRUD (Create, Read, Update, Delete) operations using Mongoose.

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript Templates)
- HTML
- CSS
- JavaScript
- Method Override

## 📚 Features

- View all chat messages.
- Create and send new chats.
- Edit existing chat messages.
- Update chat messages.
- Delete chat messages.
- Store chat data in MongoDB.
- Dynamic data rendering using EJS.
- Handle asynchronous database operations.
- Error handling using try-catch.

## 📂 Project Structure

```text
MongoDB-with-Express/
│
├── models/
│   └── chat.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   └── new.ejs
│
├── node_modules/
├── index.js
├── init.js
├── package.json
├── package-lock.json
└── .gitignore
```

## ⚙️ Installation and Setup

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd MongoDB-with-Express
```

**3. Install dependencies**

```bash
npm install
```

**4. Start MongoDB**

Make sure your MongoDB server is running locally.

**5. Run the application**

```bash
node index.js
```

**6. Open your browser**

```text
http://localhost:8080
```

Visit `/chats` to view the chat messages.

## 🗄️ Database Information

- Database: MongoDB
- Database Name: whatsapp
- ODM: Mongoose
- Collection: chats (Mongoose-managed collection)

MongoDB Connection:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
```

## 🎯 Learning Outcomes

Through this project, I practised:

- Connecting Node.js applications with MongoDB.
- Understanding Mongoose and its working principles.
- Creating models and schemas.
- Performing CRUD operations.
- Working with Express.js routes.
- Handling HTTP methods (GET, POST, PUT, DELETE).
- Using async/await and Promises.
- Rendering dynamic pages using EJS.
- Handling database errors.

## 👨‍💻 Author

**Rony Adhikary**

Aspiring Software Engineer | AI/ML Enthusiast | Web Developer

---

⭐ If you find this project interesting, feel free to explore my repository!
