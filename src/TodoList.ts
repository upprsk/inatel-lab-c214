export type Task = {
  title: string;
  description: string;
  targetDate: string;
  type?: string;
  priority?: string;
  subTasks?: Task[];
};

export type UpdateTask = Partial<Task>;

export class TodoList {
  private tasks: Task[] = [];

  add(task: Task) {
    // peak typescript good practices
    const missingProperties = ['title', 'description', 'targetDate'].filter(
      prop => !Object.keys(task).includes(prop),
    );

    try {
      if (missingProperties.length > 0) {
        return `Missing properties in object: ${missingProperties}`;
      }

      this.tasks.push(task);
    } catch (error) {
      return error;
    }
  }

  updateTask(index: number, task: UpdateTask) {
    this.tasks[index] = { ...this.tasks[index], ...task };
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  getTasks() {
    return this.tasks;
  }
}
