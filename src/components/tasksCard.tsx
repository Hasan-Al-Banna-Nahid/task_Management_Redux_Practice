import { CheckCircle, Edit, Trash2 } from "lucide-react";
import { ITask } from "../redux/features/tasks/types/tasks";
import { cn } from "../lib/utils";

type TaskCardProps = {
  task: ITask;
};

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div
      className={cn(
        "flex gap-2 justify-between w-[1000px] mx-auto my-12 rounded-2xl p-6 font-bold",
        task.isCompleted && "line-through",
        task.priority === "Medium" &&
          "bg-teal-800 dark:bg-teal-800 dark:text-white light:bg-teal-200",
        "light:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 light:text-transparent light:bg-clip-text"
      )}
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {task.title}
        </h3>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {task.description}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Priority : {task.priority}
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="text-blue-500 hover:text-blue-700">
          <Edit size={20} />
        </button>
        <button className="text-green-500 hover:text-green-700">
          <CheckCircle size={20} />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
