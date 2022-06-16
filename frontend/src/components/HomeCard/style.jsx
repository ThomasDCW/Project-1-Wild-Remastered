import styled from "styled-components";

export default styled.article`
  width: 16rem;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid grey;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
  background-image: url(${(picture) => picture.bg});
  background-position: center;
  background-size: cover;
  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    background-color: green;
    font-size: 2rem;
    -webkit-text-stroke: 0.5px black;
    font-weight: bold;
    font-family: Georgia, "Times New Roman", Times, serif;
    border-radius: 0px 0px 5px;
  }
`;
