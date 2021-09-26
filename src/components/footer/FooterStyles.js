import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  top: 0;
  /* display: flex; */

  display: grid;
  place-items: center;
  padding: 50px;
  background: white;
  z-index: -2; 
`;

const Image = styled.img`
    /* width: 20px */
`

export { FooterWrapper, Image };
