interface taskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export function TaskCard({ id, title, isComplete }: taskProps) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
