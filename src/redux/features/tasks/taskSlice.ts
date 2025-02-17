import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "./types/tasks";
import { RootState } from "../../store/store";

interface initialState {
  task?: ITask[];
}
const initialState: initialState = {
  task: [
    {
      id: "1",
      title: "Sample Task",
      description: "This is a sample task description",
      isCompleted: false,
      dueDate: "2025-12-31",
      priority: "Medium",
      filter: "All",
    },
  ],
};
const taskSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.todo.task;
};
export const {} = taskSlice.actions;

export default taskSlice.reducer;
