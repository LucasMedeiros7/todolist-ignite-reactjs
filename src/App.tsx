import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskCard } from './components/TaskCard';

type task = {
  id: string;
  title: string;
  isComplete: boolean;
};

export function App() {
  const [tasks, setTasks] = useState(Array<task>);
  const [inputData, setInputData] = useState('');

  function handleAddNewTask(event: FormEvent): void {
    event.preventDefault();
    if (!inputData) return;
    const newTask = {
      id: uuidv4(),
      title: inputData,
      isComplete: false
    };
    setTasks([...tasks, newTask]);
    setInputData('');
  }

  function handleChangeInputData(event: ChangeEvent<HTMLInputElement>) {
    setInputData(event.target.value);
  }

  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <form onSubmit={handleAddNewTask} style={{ display: 'flex' }}>
        <input
          style={{ paddingLeft: '15px' }}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={inputData}
          onChange={handleChangeInputData}
        />

        <button
          style={{
            width: '78px',
            height: '50px',
            cursor: 'pointer'
          }}
        >
          Criar +
        </button>
      </form>

      <main>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '400px'
          }}
        >
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>

          <p>
            Concluídas <span>0</span>
          </p>
        </header>
        <div>
          {tasks?.map(task => {
            return (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
