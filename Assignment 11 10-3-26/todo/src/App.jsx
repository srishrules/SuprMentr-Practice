import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    < div className="container" >
      <div className="bow">🎀</div>
      <div className="card">


        <h1>Task List</h1>

        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="button"
          onClick={() => {
            if (task.trim() === "") return;
            setTasks([...tasks, task]);
            setTask("");
          }}
        >
          Add
        </button>

        <ul style={{ listStyleType: "none", padding: 0 }}>
          {tasks.map((t, index) => (
            <li key={index} className="task">
              {t}
              <button
                onClick={() => {
                  const newTasks = tasks.filter((_, i) => i !== index);
                  setTasks(newTasks);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bow">🎀</div>
    </div >
  );
}

export default App;