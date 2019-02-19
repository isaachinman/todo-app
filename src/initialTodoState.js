import { v4 } from 'uuid';

const existingTodos = [
  {
    id: v4(),
    description: 'delectus aut autem',
    completed: false,
  },
  {
    id: v4(),
    description: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    id: v4(),
    description: 'fugiat veniam minus',
    completed: false,
  },
  {
    id: v4(),
    description: 'et porro tempora',
    completed: true,
  },
];

export default existingTodos;
