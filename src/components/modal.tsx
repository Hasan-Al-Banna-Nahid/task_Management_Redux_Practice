import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm, Controller } from "react-hook-form";

export function TaskModal() {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    reset();
  };

  return (
    <div className="flex justify-center items-center my-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 rounded-full px-6 py-3 shadow-lg">
            Add Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-slate-700 to-slate-900 border rounded-lg shadow-xl mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Add New Task
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-300">
              Fill out the details below and click save to add your task.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="my-4 flex flex-col gap-4"
          >
            <div className="grid grid-cols-4 items-center gap-3">
              <Label htmlFor="name" className="text-right text-gray-200">
                Name
              </Label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    id="name"
                    placeholder="Task name"
                    className="col-span-3 bg-white text-black placeholder-gray-500"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-3">
              <Label htmlFor="description" className="text-right text-gray-200">
                Description
              </Label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    id="description"
                    placeholder="Task description"
                    className="p-4 rounded-lg col-span-3 bg-white text-black placeholder-gray-500"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-3">
              <Label htmlFor="dueDate" className="text-right text-gray-200">
                Due Date
              </Label>
              <Controller
                name="dueDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    id="dueDate"
                    type="date"
                    className="col-span-3 bg-white text-black placeholder-gray-500"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-3">
              <Label htmlFor="priority" className="text-right text-gray-200">
                Priority
              </Label>
              <Controller
                name="priority"
                control={control}
                defaultValue="Medium"
                render={({ field }) => (
                  <select
                    id="priority"
                    className="col-span-3 border p-2 rounded-lg bg-white text-black"
                    {...field}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                )}
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-red-600 text-white hover:bg-red-700 w-full"
              >
                Save Task
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
