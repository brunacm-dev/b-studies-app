import React from "react"
import Button from "../button_component"

class Forms extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">
            <h2>Adicionar Tarefa</h2>
          </label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Digite a tarefa"
            required
          />
        </div>
        <div>
          <label htmlFor="time"></label>
          <h2>Horário</h2>
          <input
            type="time"
            name="time"
            id="time"
            step="1"
            min="00:00"
            max="2:00"
            required
          />
        </div>
        <Button />
      </form>
    )
  }
}
export default Forms
