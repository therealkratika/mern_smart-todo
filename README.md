# 📝 Smart Tasks

A modern and responsive **MERN Stack To-Do application** designed to make task management simple, organized, and productive.

Smart Tasks allows users to create, manage, complete, and delete tasks while providing a dynamic dashboard to track daily progress. Tasks are organized into **Today's Tasks** and **Upcoming Tasks**, with completed tasks automatically hidden after their scheduled date to keep the workspace clean.

---

## 🚀 Features

* ✅ **Create Tasks** — Add new tasks with relevant details.
* 📋 **View Tasks** — View all active tasks in an organized interface.
* ✏️ **Update Tasks** — Modify existing task information.
* 🗑️ **Delete Tasks** — Remove tasks that are no longer required.
* ☑️ **Mark Tasks as Completed** — Easily track completed work.
* 📊 **Dynamic Dashboard** — Monitor task progress at a glance.
* 📅 **Today's Tasks** — Quickly view tasks scheduled for today.
* 🔜 **Upcoming Tasks** — View tasks planned for future dates.
* 🎨 **Color-Coded Sections** — Quickly distinguish different task categories.
* 🧹 **Automatic Task Cleanup** — Completed tasks automatically disappear from the active view after their scheduled day.
* 📱 **Responsive UI** — Designed to work across desktop and mobile screen sizes.
* 🔄 **REST API Integration** — Frontend communicates with the backend through RESTful APIs.
* 💾 **Persistent Storage** — Tasks are stored in MongoDB.

---

## 🛠️ Tech Stack

### Frontend

* **React.js** — User interface
* **JavaScript (ES6+)**
* **CSS** — Styling and responsive design
* **Axios / Fetch** — API communication

### Backend

* **Node.js** — JavaScript runtime
* **Express.js** — REST API framework
* **MongoDB** — NoSQL database
* **Mongoose** — MongoDB object modeling
* **CORS** — Cross-origin request handling
* **dotenv** — Environment variable management

### Development Tools

* Git & GitHub
* npm
* VS Code
* Postman

---

## 🏗️ Project Structure

```text
mern_smart-todo/
│
├── todo-backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── todo-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── public/
│   └── package.json
│
└── README.md
```

> The exact internal structure may vary depending on the current implementation.

---

## 🔄 Application Flow

```text
                 ┌────────────────────┐
                 │     React UI       │
                 │  Todo Frontend     │
                 └─────────┬──────────┘
                           │
                           │ HTTP Requests
                           ▼
                 ┌────────────────────┐
                 │   Express Server   │
                 │    REST APIs       │
                 └─────────┬──────────┘
                           │
                           │ Mongoose
                           ▼
                 ┌────────────────────┐
                 │      MongoDB       │
                 │   Todo Database    │
                 └────────────────────┘
```

---

# ⚙️ Getting Started

Follow the steps below to run Smart Tasks locally.

## 📌 Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB or a MongoDB Atlas account
* Git

---

## 📥 1. Clone the Repository

```bash
git clone https://github.com/therealkratika/mern_smart-todo.git
```

Navigate into the project:

```bash
cd mern_smart-todo
```

---

# 🔧 Backend Setup

Open a terminal and navigate to the backend:

```bash
cd todo-backend
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file inside `todo-backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace:

```text
your_mongodb_connection_string
```

with your MongoDB connection string.

For example:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/smarttasks
```

> Never commit your `.env` file or expose database credentials publicly.

### Start the Backend

```bash
npm start
```

or, if the project uses a development script:

```bash
npm run dev
```

The backend should now be running on:

```text
http://localhost:5000
```

---

# 🎨 Frontend Setup

Open another terminal:

```bash
cd todo-frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm start
```

If the project uses Vite:

```bash
npm run dev
```

The application will be available at the local URL displayed in your terminal.

---

# 🔌 API Overview

The backend exposes RESTful APIs for managing tasks.

| Method   | Endpoint         | Description           |
| -------- | ---------------- | --------------------- |
| `GET`    | `/api/todos`     | Fetch all tasks       |
| `GET`    | `/api/todos/:id` | Fetch a specific task |
| `POST`   | `/api/todos`     | Create a new task     |
| `PUT`    | `/api/todos/:id` | Update a task         |
| `DELETE` | `/api/todos/:id` | Delete a task         |

> Update the endpoint names above if your backend uses different route paths.

---

# 📊 Task Management

Smart Tasks organizes work into different views:

### 📅 Today's Tasks

Displays tasks scheduled for the current day, allowing users to focus on immediate priorities.

### 🔜 Upcoming Tasks

Displays tasks scheduled for future dates so users can plan their upcoming work.

### ✅ Completed Tasks

Users can mark tasks as completed. Completed tasks are automatically removed from the active view after their scheduled day, keeping the dashboard focused on relevant work.

---

# 🧠 Key Concepts Demonstrated

This project demonstrates practical full-stack development concepts including:

* MERN stack architecture
* React component-based development
* React state management
* RESTful API design
* CRUD operations
* MongoDB database integration
* Mongoose schemas and models
* Client-server communication
* Asynchronous JavaScript
* API error handling
* Environment variables
* Responsive UI development
* Task filtering and categorization
* Date-based task management

---

# 🖥️ Screenshots

Add screenshots of your application here:

```md
## 📸 Screenshots

### Dashboard

![Dashboard](./screenshots/dashboard.png)

### Today's Tasks

![Today's Tasks](./screenshots/today.png)

### Upcoming Tasks

![Upcoming Tasks](./screenshots/upcoming.png)
```

You can create a `screenshots` folder in the root of the project and place your images there.

---

# 🚀 Future Improvements

Some features that could be added in future versions:

* 🔐 User authentication with JWT
* 👤 Personal task management for multiple users
* 🔔 Task reminders and notifications
* 🔎 Search and advanced filtering
* 🏷️ Task categories and tags
* ⭐ Task priority levels
* 📈 Productivity analytics
* 🌙 Dark mode
* 📱 PWA/mobile support
* 🔄 Drag-and-drop task organization
* ☁️ Cloud deployment
* 🧪 Automated testing

---

# 🌐 Deployment

The application can be deployed using:

### Frontend

* Vercel
* Netlify

### Backend

* Render
* Railway

### Database

* MongoDB Atlas

---

# 📚 What I Learned

Building Smart Tasks helped strengthen my understanding of full-stack web development using the MERN stack.

The project provided hands-on experience with:

* Building reusable React components
* Connecting a React frontend to an Express backend
* Designing REST APIs
* Performing CRUD operations with MongoDB
* Managing asynchronous API requests
* Working with dates and task states
* Structuring a full-stack application
* Handling environment variables and backend configuration
* Creating a responsive and user-friendly interface

---

# 🤝 Contributing

Contributions are welcome!

If you would like to contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "feat: add your feature"
```

5. Push the branch.

```bash
git push origin feature/your-feature
```

6. Open a Pull Request.

---

# 📄 License

This project is open source and available under the **MIT License**.

---

# 👩‍💻 Author

### Kratika Gupta

GitHub:
https://github.com/therealkratika

Repository:
https://github.com/therealkratika/mern_smart-todo

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub!

**Made with ❤️ using the MERN Stack**
