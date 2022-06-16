import styled from "styled-components";

export default styled.article`
  width: 16%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid grey;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-image: ${(picture) => picture.bg};
  h1 {
    background-color: green;
  }
`;
