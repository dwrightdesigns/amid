import React from "react";
import styled from "styled-components";

const TextAreaStyle = styled.textarea`
 outline: none;
 border: none;
 margin: 3rem 0 0 0;
 width: 20rem;
 text-align: center;
 font-family: "Poppins", sans-serif;
 background: var(--main-color);
 color: var(--dark-color);
 font-size: 1.0625rem;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 1.375rem;
  }

    &::placeholder {
        color: var(--light-color);
        
    }
`

function TaskTextArea() {
    return (
        <TextAreaStyle placeholder="What are you working on?" rows="5"></TextAreaStyle>
    )

}
export default TaskTextArea;