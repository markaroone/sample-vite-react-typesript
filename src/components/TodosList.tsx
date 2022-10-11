import { useContext } from 'react';

import { TodosContext } from '../store/TodosContextProvider';
import TodosItem from './TodosItem';

const TodosList = () => {
  const { todos, isEmpty } = useContext(TodosContext);

  return (
    <div>
      {!isEmpty && (
        <ul style={{ display: 'flex', flexDirection: 'column' }}>
          {todos.map((todo) => (
            <TodosItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}

      {isEmpty && <p style={{ color: '#AAA' }}>No todos available!</p>}
    </div>
  );
};

export default TodosList;
