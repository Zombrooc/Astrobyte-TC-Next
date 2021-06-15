import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  padding: 20px;
  padding-top: 100px;
  flex-wrap: wrap;

  & > div {
    flex: 1;
    padding: 20px;
  }

  /* & > div {
    flex: 1;
    padding: 20px;

    &.sm {
      display: flex;
      justify-content: center;

      @media screen and (max-width: 750px) {
        align-items: center;
      }
    }
  } */

  .fa {
    padding: 20px;
    font-size: 30px;
    /* width: 50px; */
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 5px 2px;
  }

  .fa:hover {
    opacity: 0.7;
  }

  .fa-facebook {
    background: #3b5998;
    color: white;
  }

  .fa-instagram {
    background: #125688;
    color: white;
  }

  .fa-whatsapp {
    background: #00b489;
    color: white;
  }
`;
