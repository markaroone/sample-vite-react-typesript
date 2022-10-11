import { createContext, useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isEmpty } from '../helper/index';

export interface TodoType {
  title: string;
  id: string;
  isCompleted: boolean;
}

type PropsType = {
  children: ReactNode;
};

type ContextType = {
  todos: TodoType[];
  isEmpty: boolean;
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: string) => void;
};

export const TodosContext = createContext<ContextType>({
  todos: [],
  isEmpty: true,
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider = ({ children }: PropsType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isTodosEmpty, setIsTodosEmpty] = useState(true);

  const addTodoHandler = (todoText: string) => {
    setTodos((previousTodos) => [
      ...previousTodos,
      { title: todoText, isCompleted: false, id: uuidv4() },
    ]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    if (isEmpty(todos)) {
      setIsTodosEmpty(true);
      return;
    }

    setIsTodosEmpty(false);
  }, [todos]);

  const contextValue: ContextType = {
    todos,
    isEmpty: isTodosEmpty,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
