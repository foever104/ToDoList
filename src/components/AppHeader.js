import { React, useState } from "react";
import Button, { SelectButton } from "./Button";
// import "../styles/title.css";
// import "../styles/button.css";
import "../styles/app.css";
import TodoModel from "./TodoModel";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slice/todoSlice";

function AppHeader() {
  const dispatch = useDispatch();
  const [modelOpen, setModelOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className="appHeader">
      <Button
        className="button_primary"
        onClick={() => setModelOpen(true)}
        style={{ float: "left" }}
      >
        Add Task
      </Button>
      <SelectButton
        id="status"
        className="button_selected"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
        style={{ float: "right" }}
      >
        <option value="all">ALL</option>
        {/* <option value="important">Important</option> */}
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel type="add" modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
  );
}

export default AppHeader;
