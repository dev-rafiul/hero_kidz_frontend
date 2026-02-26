import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        
        <svg viewBox="0 0 512 512" className="svgIcon">
  <path d="M352 128l-22.6 22.6L393.4 214H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h233.4l-64 63.4L352 384l128-128-128-128zM96 96h128V32H96C60.7 32 32 60.7 32 96v320c0 35.3 28.7 64 64 64h128v-64H96V96z"/>
</svg>
    
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: .3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 20px;
    transition-duration: .3s;
  }

  .svgIcon path {
    fill: #E5F0FF;
  }

  .button:hover {
    width: 120px;
    border-radius: 50px;
    transition-duration: .3s;
    background-color: rgb(255, 69, 69);
    align-items: center;
  }

  .button:hover .svgIcon {
    width: 50px;
    transition-duration: .3s;
    transform: translateY(120%);
  }

  .button::before {
    position: absolute;
    top: -20px;
    content: "Log In";
    color: white;
    transition-duration: .3s;
    font-size: 2px;
  }

  .button:hover::before {
    font-size: 18px;
    opacity: 1;
    transform: translateY(33px);
    transition-duration: .3s;
  }`;

export default Button;
