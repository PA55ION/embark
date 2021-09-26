import styled from "styled-components";

export const StyledBurger = styled.button`
  margin-top: 20px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 3%;
    right: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.45rem;
    height: 1.43rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }
  &:focus {
    outline: none;
  }
  div {
    width: 100%;
    height: 4px;
    background: ${({ open }) => (open ? "#0D0C1D" : "#1B4965")};
    border-radius: 2px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
