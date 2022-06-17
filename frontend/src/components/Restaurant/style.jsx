import styled from "styled-components";

export default styled.main`
  background-color: #000000df;
  color: #ffffff;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  min-height: 100vh;
  h1 {
    padding: 0.8em;
    letter-spacing: 0.3em;
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    -webkit-text-stroke: 2px black;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1vh;
    .picturecontainer {
      img {
        margin: 2.1vw;
        height: 300px;
        width: 300px;
        border-radius: 50%;
        border: 2px solid black;
        box-shadow: rgb(0, 0, 0) 0px 20px 30px;
      }
    }
    .infoscontainer {
      width: 92%;
      p {
        line-height: 1.6em;
        letter-spacing: 0.2em;
        text-align: justify;
        font-size: 1.4em;
        margin-bottom: 1.2em;
      }
      h2 {
        font-size: 1.6em;
        line-height: 1.8em;
        letter-spacing: 0.4em;
      }
    }
  }
`;
