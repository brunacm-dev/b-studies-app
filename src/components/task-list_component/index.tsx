import React from "react"

function TaskList() {
  const tasks = [
    { task: "Matemática" },
    { task: "Física" },
    { task: "Química" },
    { task: "Biologia" },
  ]
  return (
    <div>
      <h2>TaskList</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <h3>{item.task}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TaskList
