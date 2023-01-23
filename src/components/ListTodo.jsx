import { useState } from "react";

const ListTodo = (props) => {
  const { todos, deleteTodo, markAsCompleted, updateTodoTitle } = props;

  const [displayCompleted, setDisplayCompleted] = useState(true);
  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const style = {
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "5px",
  };
  const save = () => {
    updateTodoTitle(editId, editTitle);
    setEditId("");
  };

  const cancel = () => {
    setEditId("");
    setEditTitle("");
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
            <td>Compltete</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {todos.map(
            (todo) =>
              (!todo.completed || displayCompleted) && (
                <tr>
                  <td>{todo.userId}</td>
                  <td>{todo.id}</td>
                  {editId && editId === todo.id ? (
                    <td>
                      <input
                        type="title"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        size={todo.title.length}
                      />
                      <input type="button" onClick={save} value="Save" />
                      <input type="button" onClick={cancel} value="Cancel" />
                    </td>
                  ) : (
                    <td className={todo.completed ? "mark-as-done" : ""}>
                      {todo.title}
                    </td>
                  )}
                  <td>
                    <input type="checkbox" checked={todo.completed} />
                  </td>
                  <td>
                    <button onClick={() => markAsCompleted(todo.id)}>✓</button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setEditId(todo.id);
                        setEditTitle(todo.title);
                      }}
                    >
                      ✎
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteTodo(todo.id)}>X</button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>

      <div>
        <label>Display Completed?</label>
        <input
          type="checkbox"
          checked={displayCompleted}
          onChange={() => setDisplayCompleted(!displayCompleted)}
        />
      </div>
    </div>
  );
};

export default ListTodo;
