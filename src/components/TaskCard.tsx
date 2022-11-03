import { Trash } from 'phosphor-react';

interface taskProps {
  id: string;
  title: string;
  isComplete: boolean;
  onDeleteTask: (id: string) => void;
}

export function TaskCard({ id, title, isComplete, onDeleteTask }: taskProps) {
  function handleDeleteComment() {
    onDeleteTask(id);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex' }}>
        <input type="radio" name="" id="" />
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
