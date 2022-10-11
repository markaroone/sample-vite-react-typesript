import { useContext, useState, FormEvent, ChangeEvent, useEffect } from 'react';

import { TodosContext } from '../store/TodosContextProvider';

import styles from './CreateNewTodoForm.module.css';

const CreateNewTodoForm = () => {
  const { addTodo, todos, isEmpty } = useContext(TodosContext);

  const [todoInput, setTodoInput] = useState('');

  const onFormSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    setTodoInput('');
    addTodo(todoInput);
  };

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmitHandler}>
      <input type='text' value={todoInput} onChange={onChangeInputHandler} />

      <button className={styles['form__button--submit']}>
        Create New Todo
      </button>
    </form>
  );
};

export default CreateNewTodoForm;
