import { selectTask } from "../redux/features/tasks/taskSlice";
import { useAppSelector } from "../redux/hooks/hooks";
import { TaskModal } from "./modal";
import TaskCard from "./tasksCard";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  // const dispatch = useAppDispatch();
  console.log(tasks);
  return (
    <div>
      <TaskModal />
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
