"use client"
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import styled, { keyframes } from "styled-components";

const CartBtn = () => {
  const [shake, setShake] = useState(false);

  const handleClick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <StyledWrapper>
      <button
        className={`button ${shake ? "shake" : ""}`}
        onClick={handleClick}
      >
       

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
