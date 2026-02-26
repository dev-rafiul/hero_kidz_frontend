import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button" style={{verticalAlign: 'middle'}}><span>SIGN UP</span></button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
   display: inline-block;
   border-radius: 25px;
   border: none;
   background: white;
   color: white;
   font-family: inherit;
   text-align: center;
   font-size: 18px;
   box-shadow: 0px 14px 56px -11px #1875FF;
   width: 130px;
   height: 50px;
   padding: 1em;
   transition: all 0.4s;
   cursor: pointer;
  }

  .button span {
   cursor: pointer;
   display: inline-block;
   position: relative;
   transition: 0.4s;
   color: black;
   font-weight: 600;
  }

  .button span:after {
   content: 'Now';
   position: absolute;
   opacity: 0;
   top: 0;
   right: -20px;
   transition: 0.7s;
  }

  .button:hover span {
   padding-right: 3.55em;
  }

  .button:hover span:after {
   opacity: 4;
   right: 0;
  }`;

export default Button;
