import styled from "styled-components";

export default styled.main`
  background-color: #000000df;
  color: #ffffff;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  h1 {
    font-weight: bold;
    padding: 0.4em;
    margin-left: 8vh;
    font-size: 4rem;
    -webkit-text-stroke: 2px black;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4vh;
    .picturecontainer {
      img {
        margin: 2vw;
        height: 300px;
        width: 300px;
        border-radius: 50%;
        border: 2px solid black;
        box-shadow: rgb(0, 0, 0) 0px 5px 15px;
      }
    }
    .infoscontainer {
      width: 80%;
      p {
        text-align: justify;
        font-size: 2.5em;
      }
      h2 {
        margin-top: 1em;
        font-size: 1.5em;
      }
    }
  }
`;
