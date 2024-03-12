import readline from 'readline';
import { promisify } from 'util';
import { Task, TodoList } from './TodoList';

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userInput = promisify(reader.question).bind(reader);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getUserInput(prompt: string): Promise<any> {
  return await userInput(prompt);
}

const toDoList = new TodoList();

async function addNewTask() {
  const newTask: Task = {
    title: '',
    description: '',
    targetDate: '',
    type: '',
    priority: '',
  };
  newTask.title = await getUserInput('Digite o título da tarefa: ');
  newTask.description = await getUserInput('Digite a descrição da tarefa: ');
  newTask.targetDate = await getUserInput('Digite a data limite da tarefa: ');

  toDoList.add(newTask);
}

async function startTodoList() {
  const userChoise = await getUserInput(
    'Digite 1 para adicionar uma tarefa ou 0 para sair: ',
  );

  switch (userChoise) {
    case '0':
      reader.close();

      return;
    case '1':
      await addNewTask();
      console.log('TAREFAS', toDoList.getTasks());
      reader.close();
      return;
    default:
      reader.close();
  }
}

startTodoList();
