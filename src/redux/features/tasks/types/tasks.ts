export interface ITask {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  filter: "All" | "Completed" | "Pending";
}
