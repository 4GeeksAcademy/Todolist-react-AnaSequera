import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../../styles/index.css";

const Home = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && task.trim() !== "") {
            setTodos([...todos, task.trim()]);
            setTask("");
        }
    };

    const handleDeleteTodo = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="container">
            <h1>To do List</h1>
            <div className="todo-box">
                <input
                    type="text"
                    placeholder="¿Qué necesitas hacer?"
                    value={task}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <ul>
                    {todos.length === 0 ? (
                        <li>No hay tareas, añadir tareas</li>
                    ) : (
                        todos.map((todo, index) => (
                            <li key={index}>
                                {todo}
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteTodo(index)}
                                >
                                    X
                                </button>
                            </li>
                        ))
                    )}
                </ul>
                <div className="tasks-left">{todos.length} item(s) left</div>
            </div>
            <div className="author-name">Ana Sequera</div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Home />);