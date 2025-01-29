

import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { yapilacaklar } = useSelector((state)=>state.todoReducer)
  //! Yapılacaklar dizisi
  return (
    <div>
      <div>
        {yapilacaklar.map((a) => (
          <TodoItem a={a}
         />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
