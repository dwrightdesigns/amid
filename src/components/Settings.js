import React, { Component } from 'react';
import '../App.scss';
import styled from "styled-components";

const StyledDiv = styled.section`
    position: relative;
    top: 100px;
`
const StyledDuration = styled.section`
    display: flex;
    justify-content: center;
    text-align: center;
`
const DurationBackground = styled.section`
        background-color: var(--dark-color);
        color: white;
        border-style: solid;
        border-radius: 10px;
        padding: 5px;
        width: 300px;
        height: 100px;
`
const StyledToggle = styled.section`
    display: flex;
    justify-content: center;
`
const ToggleBackground = styled.section`
        background-color: var(--dark-color);
        color: white;
        border-style: solid;
        border-radius: 10px;
        width: 300px;
        padding: 5px;
`

const InfoStyled = styled.section`
    display: flex;
    justify-content: center;
    text-align: center;
`

const InfoBackground = styled.section`
    background-color: var(--dark-color);
    color: white;
    border-style: solid;
    border-radius: 10px;
    width: 300px;
    height: 100px;
`
class Settings extends Component {
    render() {
        return (
            <StyledDiv>
                <StyledDuration>
                        <DurationBackground>
                            <h6>break duration</h6>
                            <p>10
                            minutes</p>
                        </DurationBackground>
                        <DurationBackground>
                            <h6>focus duration</h6>
                            <p>10
                            minutes</p>
                        </DurationBackground>
                </StyledDuration>
                <StyledToggle>
                    <ToggleBackground>
                        <h6>Auto Start Break</h6>
                        <i class="fas fa-toggle-on"></i>
                    </ToggleBackground>
                    <ToggleBackground>
                        <h6>Play Chime When Timer Ends</h6>
                        <i class="fas fa-toggle-on"></i>
                    </ToggleBackground>
                </StyledToggle>
                <InfoStyled>
                    <InfoBackground>
                        <i class="fas fa-question"></i>
                        <p>how to use</p>
                    </InfoBackground>
                    <InfoBackground>
                        <i class="fas fa-envelope-square"></i>
                        <p>contact</p>
                    </InfoBackground>
                </InfoStyled>
            </StyledDiv>
        )
    }
}

export default Settings;
