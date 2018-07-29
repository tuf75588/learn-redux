const initialState = {
  message: 'Hello Coding Garden!!',
  newTodo: '',
  todos: [
    {
      title: 'Learn React',
      done: false
    },
    {
      title: 'Learn JSX',
      done: false
    }
  ]
};
export function reducer(state = initialState, action) {
  return state;
}
