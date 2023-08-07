import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { getAllTodo } from "../services/actions/todoAction";
const TODO = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  return (
    <div>
      <h1>Todo Fetching Data</h1> <hr />
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error.message}</h3>}

      <section>
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;
            return (
              <article key={id}>
                <h4>{id}</h4>
                <h3>{title}</h3>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default TODO;
