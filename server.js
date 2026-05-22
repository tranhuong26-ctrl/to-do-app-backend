const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
    origin:"https://to-do-app-649f0.web.app",
    methods:["GET","POST","DELETE","PUT"]
}));
app.use(express.json());

let tasks = [];

// GET TASKS
app.get("/tasks", (req, res) => {

    res.json(tasks);

});

// POST TASK
app.post("/tasks", (req, res) => {

    const newTask = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };

    tasks.push(newTask);

    res.json(newTask);

});

// DELETE TASK
app.delete("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Đã xóa"
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
