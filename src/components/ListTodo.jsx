const ListTodo = (props) => {
  const { todos, deleteTodo } = props;

  const style = {
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "5px",
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      <table style={style}>
        <thead>
          <tr>
            <td>UserID</td>
            <td>ID</td>
            <td>Title</td>
            <td>Completed</td>
            <td>Delete</td>
            <td>Compltete</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <input type="checkbox" checked={todo.completed} />
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.id)}>X</button>
              </td>
              <td>
                <button>✓</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
