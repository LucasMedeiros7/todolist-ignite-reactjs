import { Trash } from 'phosphor-react';
import './TaskCard.css';

interface taskProps {
  id: string;
  title: string;
  isComplete: boolean;
  onDeleteTask: (id: string) => void;
  onUpdateTask: (id: string) => void;
}

export function TaskCard(props: taskProps) {
  const { id, title, isComplete, onDeleteTask, onUpdateTask } = props;

  function handleDeleteComment() {
    onDeleteTask(id);
  }

  function handleUpdateTask() {
    onUpdateTask(id);
  }

  return (
    <div className="task-card">
      <div className="card">
        <input onClick={handleUpdateTask} type="checkbox" checked={isComplete} />
        {isComplete ? (
          <p>
            <s className="done">{title}</s>
          </p>
        ) : (
          <p>{title} </p>
        )}
      </div>

      <Trash
        onClick={handleDeleteComment}
        style={{ cursor: 'pointer' }}
        size={24}
        weight="light"
        color="#808080"
      />
    </div>
  );
}
