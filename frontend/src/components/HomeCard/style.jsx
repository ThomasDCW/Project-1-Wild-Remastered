import styled from "styled-components";

export default styled.article`
  width: 16rem;
  height: 416px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: rgb(0, 0, 0) 0px 15px 30px;
  background-image: url(${(picture) => picture.bg});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  filter: sepia(0.5);
  :hover {
    transform: translateY(-30px);
    filter: none;
  }
  h1 {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #028f21;
    font-size: 24px;
    -webkit-text-stroke: 0.5px black;
    font-weight: bold;
    font-family: Georgia, "Times New Roman", Times, serif;
    border-radius: 0px 0px 5px 5px;
  }
`;
