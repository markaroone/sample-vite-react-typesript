import { ReactNode, useContext } from 'react';
import { TodoType } from '../store/TodosContextProvider';
import { TodosContext } from '../store/TodosContextProvider';

type PropsType = {
  key: string;
  todo: TodoType;
};

const TodosItem = ({ todo }: PropsType) => {
  const { removeTodo } = useContext(TodosContext);

  return <li onClick={removeTodo.bind(null, todo.id)}>{todo.title}</li>;
};

export default TodosItem;
