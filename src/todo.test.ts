import { Task, TodoList } from './TodoList';

const anyTask: Task = {
  title: 'any-title',
  description: 'any-decription',
  targetDate: '01/01/2025',
  type: 'any-type',
  priority: '1',
  subTasks: [],
};

describe('TodoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new TodoList();
      todoInstance.add(anyTask);
      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([anyTask]);
    });

    test('should add a valid task', () => {
      const todoInstance = new TodoList();
      const invalidTask = { invalidField: 'aaaaa' };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      todoInstance.add(invalidTask as any);
      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([]);
    });
  });

  describe('Testing update', () => {
    test('should update existing task', () => {
      const todoInstance = new TodoList();
      todoInstance.add(anyTask);

      const updatedProperties = { priority: '2' };
      todoInstance.updateTask(0, updatedProperties);

      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([{ ...anyTask, ...updatedProperties }]);
    });
  });

  describe('Testing remove', () => {
    test('should delete a task', () => {
      const todoInstance = new TodoList();
      todoInstance.add(anyTask);

      todoInstance.removeTask(0);

      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([]);
    });

    test('should delete only one task', () => {
      const todoInstance = new TodoList();
      todoInstance.add(anyTask);
      todoInstance.add(anyTask);

      todoInstance.removeTask(0);

      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([anyTask]);
    });
  });
});
