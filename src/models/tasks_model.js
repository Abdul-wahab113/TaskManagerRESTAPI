const pool = require('../config/db');


// function for getting all tasks 
getAllTasks = async () => {
    const result = await pool.query("SELECT * FROM tasks");

    return result.rows;
};

// for specific task

getTaskById = async (id) => {
    const result = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);

    return result.rows[0];
}

// for creating new task

createNewTask = async ({ title, description, status }) => {


    if (status) {
        const result = await pool.query("INSERT INTO tasks (title,description,status) VALUES($1,$2,$3) RETURNING *", [title, description, status]);
        return result.rows[0];
    }
    else {
        const result = await pool.query("INSERT INTO tasks (title,description) VALUES($1,$2) RETURNING *", [title, description]);
        return result.rows[0];
    }
}

// for updating existing task

updateTask = async (id, { title, description, status }) => {

    if (status) {
        const result = await pool.query("UPDATE tasks SET title=$1, description=$2, status=$3 WHERE id=$4 RETURNING *", [title, description, status, id]);
        return result.rows[0];
    }
    else {
        const result = await pool.query("UPDATE tasks SET title=$1, description=$2 WHERE id=$3 RETURNING *", [title, description, id]);
        return result.rows[0];
    }
}

// for deleting existing task
deleteTask = async (id) => {

    const result = await pool.query("DELETE FROM tasks WHERE id=$1 RETURNING *", [id]);
    return result.rows[0];
}


module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask,
    updateTask,
    deleteTask
}