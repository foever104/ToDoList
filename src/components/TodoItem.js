import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit, MdStar } from "react-icons/md";
import TodoModel from "./TodoModel";
import CheckButton from "./CheckButton";
import StarButton from "./StarButton";
import "../styles/TodoItem.css";
import { deleteTodo, updateTodo } from "../slice/todoSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

function TotoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModelOpen, setUpdateModelOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [star, setStar] = useState("normal");
  const [red, setRed] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };
  const handleUpdate = () => {
    setUpdateModelOpen(true);
    console.log("update");
  };

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  useEffect(() => {
    if (todo.star === false) {
      setRed(true);
    } else {
      setRed(false);
    }
  }, [todo.star]);

  const handleCheck = () => {
    setChecked(!checked);
    // console.log(checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };

  const handleStar = () => {
    setRed(!red);
    dispatch(updateTodo({ ...todo, star: !red ? "normal" : "imporant" }));
  };

  return (
    <div>
      <div className="item">
        <div className="todoDetails">
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className="texts">
            <p
              className={
                todo.status === "complete" ? "todoText_completed" : "todoText"
              }
            >
              {todo.title}
            </p>
            <p className="time">
              {todo.time}
              {todo.star}
              {todo.status}
            </p>
          </div>
        </div>

        <div className="todoActions">
          <div>
            <StarButton star={red} handleStar={handleStar} />
          </div>

          <div
            className="icon"
            onClick={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>

          <div
            className="icon"
            onClick={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModel
        type="update"
        modelOpen={updateModelOpen}
        setModelOpen={setUpdateModelOpen}
        todo={todo}
      />
    </div>
  );
}
export default TotoItem;
