const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
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

app.listen(3000, () => {

    console.log("Server running on port 3000");

});
