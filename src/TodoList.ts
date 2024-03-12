export type Task = {
  title: string;
  description: string;
  targetDate: string;
  type?: string;
  priority?: string;
  subTasks?: Task[];
};

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

  getTasks() {
    return this.tasks;
  }
}
