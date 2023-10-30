import React from 'react';
import Forms from './components/forms_component';
import TaskList from './components/task-list_component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Forms />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
