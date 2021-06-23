import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 150px 12%;

  & > p {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.8;
  }

  .callToAction {
    background: var(--color-primary);
    text-align: center;
    transition: 0.5;
    color: #fff;

    &:hover {
      background: var(--color-info);
    }
  }
`;
