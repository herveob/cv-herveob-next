const Tasks = ({tasks}: {tasks:string[]}) => {
  return (
    <div className="mt-2 ml-6">
      <ul>
        {tasks.map((task, taskIndex) => (
          <li key={taskIndex} className="mt-1 list-disc font-extralight">{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;