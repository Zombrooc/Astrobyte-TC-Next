import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  padding-top: 120px;

  font-family: Roboto;
  font-weight: 400;

  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  hr {
    width: 80%;
    margin: 0 auto;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    div {
      width: 50%;

      h2, p {
        padding: 15px;
      }

      img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
      }

      @media screen and (max-width: 720px) {
        width: 100%;

        img {
          margin-bottom: 15px;
        }
      }
    }
  }
`;
