"use client"
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Button = () => {
  const [shake, setShake] = useState(false);

  const handleClick = () => {
    setShake(true);

    setTimeout(() => {
      setShake(false);
    }, 300); // duration must match animation time
  };

  return (
    <StyledWrapper>
      <button
        className={`button ${shake ? "shake" : ""}`}
        onClick={handleClick}
      >
        <span>REGISTER</span>
      </button>
    </StyledWrapper>
  );
};

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateY(-0px); }
  40% { transform: translateY(5px); }
  60% { transform: translateY(0px); }
  80% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

const StyledWrapper = styled.div`
  .button {
    display: inline-block;
    border-radius: 25px;
    border: none;
    background: white;
    color: white;
    font-family: inherit;
    text-align: center;
    font-size: 15px;
    box-shadow: 0px 14px 56px -11px gray;
    width: 130px;
    height: 50px;
    padding: 10px;
    transition: all 0.4s;
    cursor: pointer;
  }

  .button.shake {
    animation: ${shakeAnimation} 0.5s ease;
  }

  .button span {
    display: inline-block;
    position: relative;
    transition: 0.4s;
    color: black;
    font-weight: 600;
  }

  .button span:after {
    content: "Now";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -35px;
    transition: 0.7s;
  }

  .button:hover span {
    padding-right: 2.55em;
  }

  .button:hover span:after {
    opacity: 1;
    right: 0;
  }
`;

export default Button;
