
// import React from 'react';
// import styled from 'styled-components';

// const HamburgerUiNav = ({isOpen}) => {
//   return (
//     <StyledWrapper>
//       <label className="hamburger">
//         <input type="checkbox" checked={isOpen} readOnly />
//         <svg viewBox="0 0 32 32">
//           <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
//           <path className="line" d="M7 16 27 16" />
//         </svg>
//       </label>
//     </StyledWrapper>
//   );
// }







// const StyledWrapper = styled.div`
//   .hamburger {
//     cursor: pointer;
//   }

//   .hamburger input {
//     display: none;
//   }

//   .hamburger svg {
//     /* The size of the SVG defines the overall size */
//     height: 3em;
//     /* Define the transition for transforming the SVG */
//     transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
//   }

//   .line {
//     fill: none;
//     stroke: black;
//     stroke-linecap: round;
//     stroke-linejoin: round;
//     stroke-width: 3;
//     /* Define the transition for transforming the Stroke */
//     transition:
//       stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
//       stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
//   }

//   .line-top-bottom {
//     stroke-dasharray: 12 63;
//   }

//   .hamburger input:checked + svg {
//     transform: rotate(-45deg);
//   }

//   .hamburger input:checked + svg .line-top-bottom {
//     stroke-dasharray: 20 300;
//     stroke-dashoffset: -32.42;
//   }`;

// export default HamburgerUiNav;




import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const HamburgerUiNav = ({ className = '' }) => {
  const checkboxRef = useRef(null);

  return (
    <StyledWrapper className={className}>
      <label className="hamburger">
        <input ref={checkboxRef} type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>
      
      {/* Animated Menu Options */}
      <StyledMenu className="menu-options">
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
      </StyledMenu>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;

  .hamburger {
    cursor: pointer;
    display: block;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  /* Hamburger to X Animation */
  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }

  .hamburger input:checked + svg .line {
    stroke-dashoffset: -32;
  }
`;

const StyledMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  min-width: 13rem;
  padding: 0.5rem;
  margin: 0.75rem 0 0;
  list-style: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  a {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: black;
    border-radius: 0.25rem;
    transition: background 200ms;
  }

  a:hover {
    background: #f3f4f6;
  }

  /* Show menu when input checked */
  input:checked ~ & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export default HamburgerUiNav;
