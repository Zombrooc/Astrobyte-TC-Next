import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 150px 10%;

  p {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.8;
  }
`;

export const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 350px;
  padding: 25px;
  font-family: Nunito;
  font-weight: 400;
  margin: 12px;

  border: 1px solid #ddd;
  border-radius: 20px;
  flex: 1;

  h2 {
    margin: 0;
    padding: 0;
  }

  ul li {
    font-size: 16px;
    line-height: 1.9;
  }

  div.CtA {
    a {
      font-size: 15px;
      color: var(--color-light);
      padding: 15px 28px;
      transition: 0.5s;
      width: 100%;
      border: 1px solid var(--color-info);
      border-radius: 15px;
      transition: 0.5s;
      background: var(--color-info);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      a {
        color: var(--color-info);
        background: transparent;
      }
    }
  }
`;
