"use client"
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import styled, { keyframes } from "styled-components";

const CartBtn = () => {
  const [shake, setShake] = useState(false);

  const handleClick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500); // match animation duration
  };

  return (
    <StyledWrapper>
      <button
        className={`button ${shake ? "shake" : ""}`}
        onClick={handleClick}
      >
        {/* <svg viewBox="0 0 512 512" className="svgIcon"> */}
          {/* <path d="M352 128l-22.6 22.6L393.4 214H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h233.4l-64 63.4L352 384l128-128-128-128zM96 96h128V32H96C60.7 32 32 60.7 32 96v320c0 35.3 28.7 64 64 64h128v-64H96V96z" /> */}

        {/* </svg> */}

        <FiShoppingCart></FiShoppingCart>




      </button>
    </StyledWrapper>
  );
};

const shakeAnimation = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(-5px); }
  40% { transform: translateY(0px); }
  60% { transform: translateY(0px); }
  80% { transform: translateY(0px); }
  100% { transform: translateY(0); }
`;

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .button.shake {
    animation: ${shakeAnimation} 0.5s ease;
  }

  .svgIcon {
    width: 20px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: #e5f0ff;
  }

  .button:hover {
    width: 60px;
    border-radius: 50px;
    background-color: #fc4000;
  }

  .button:hover .svgIcon {
    width: 50px;
    transform: translateY(120%);
  }

  .button::before {
    position: absolute;
    top: -20px;
    content: "CART";
    color: white;
    transition-duration: 0.3s;
    font-size: 2px;
  }

  .button:hover::before {
    font-size: 18px;
    opacity: 1;
    transform: translateY(33px);
  }
`;

export default CartBtn;
