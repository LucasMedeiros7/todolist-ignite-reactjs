import { v4 as uuidv4 } from 'uuid';
import { ClipboardText, PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { TaskCard } from './components/TaskCard';
import logoTODO from './assets/todo.svg';
import logoRocket from './assets/rocket.svg';

import './App.css';

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
    if (inputData === '') return;
    const newTask = {
      id: uuidv4(),
      title: inputData,
      isComplete: false
    };
    setTasks([...tasks, newTask]);
    setInputData('');
  }

  function deleteTask(taskId: string) {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function updateTask(taskId: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const completedTasks = tasks.reduce((acc, task) => {
    if (task.isComplete) return acc + 1;
    return acc;
  }, 0);

  return (
    <div className="container">
      <header className="header-container">
        <figure className="logo">
          <img src={logoRocket} alt="Logo de foguete" />
          <img src={logoTODO} alt="Logo escrito todo" />
        </figure>

        <form onSubmit={handleAddNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={inputData}
            onChange={event => setInputData(event.target.value)}
          />
          <button>
            Criar <PlusCircle size={18} weight="bold" />
          </button>
        </form>
      </header>

      <main className="tasks-container">
        <header>
          <p className="created-tasks">
            Tarefas criadas <span>{tasks.length}</span>
          </p>

          <p className="completed-tasks">
            Concluídas{' '}
            <span>
              {tasks.length > 0 ? `${completedTasks} de ${tasks.length}` : 0}
            </span>
          </p>
        </header>
        <div className="all-tasks ">
          {tasks.length > 0 ? (
            tasks?.map(task => {
              return (
                <TaskCard
                  key={task.id}
                  onDeleteTask={deleteTask}
                  onUpdateTask={updateTask}
                  id={task.id}
                  title={task.title}
                  isComplete={task.isComplete}
                />
              );
            })
          ) : (
            <div className="no-tasks">
              <ClipboardText color="#808080" size={52} weight="light" />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
