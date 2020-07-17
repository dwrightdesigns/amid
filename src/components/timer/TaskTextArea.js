import React, { useState } from "react";
import styled from "styled-components";

const TextAreaStyle = styled.textarea`
  outline: none;
  border: none;
  width: 300px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  background-color: rgba(229, 229, 229, 0.75);
  color: var(--dark-color);
  border-radius: 8px;
  font-size: 1.0625rem;
  font-weight: 400;
  padding: 1rem;
  border: 1px solid var(--main-color);
  @media screen and (min-width: 768px) {
    font-size: 1.375rem;
  }

  &::placeholder {
    color: rgba(27, 27, 27, 0.5);
  }
`;

function TaskTextArea() {
  const currentTask = localStorage.getItem("task");
  const [task, setTask] = useState(currentTask);

  const handleChange = (e) => {
    localStorage.setItem("task", e.target.value);
    setTask(e.target.value);
  };

  return (
    <TextAreaStyle
      placeholder="What are you working on?"
      rows="4"
      value={task}
      onChange={handleChange}
    ></TextAreaStyle>
  );
}
export default TaskTextArea;
