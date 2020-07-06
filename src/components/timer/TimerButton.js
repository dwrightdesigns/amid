import React, { Component } from "react";
import styled from "styled-components";

const TimerButtonStyle = styled.button`

    display: inline-block;
    border: none;
    margin-bottom: 3rem;
    padding: 3.5rem 3.5rem;
    text-decoration: none;
    background: var(--light-color);
    color: var(--dark-color);
    font-family: sans-serif;
    text-align; center;
    font-size: 1.0625rem;
    font-weight: 400;
    border-style: solid;
    border-width: 3px;
    border-color: var(--dark-color);;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    
    &:hover {
        background: $dark-color;
        color: $light-color;
    }

`;


const TextInsideButton = styled.h3`
text-align: center;
width: 5rem;
color: $dark-color;
`
class TimerButton extends Component {

render() {
    return (
        <>
            <TimerButtonStyle>

                <TextInsideButton>Start Break</TextInsideButton>
            </TimerButtonStyle>
        </>
    )
}
}
export default TimerButton;