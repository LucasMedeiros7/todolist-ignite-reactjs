import { Trash } from 'phosphor-react';

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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex' }}>
        <input
          onClick={handleUpdateTask}
          type="radio"
          name=""
          id=""
          checked={isComplete}
        />
        <p>{title}</p>
      </div>

      <Trash
        onClick={handleDeleteComment}
        style={{ cursor: 'pointer' }}
        size={32}
        weight="light"
        color="black"
      />
    </div>
  );
}
