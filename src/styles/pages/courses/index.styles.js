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
    background: var(--color-info);
    text-align: center;
    transition: background .7s;
    color: #fff;

    &:hover {
      background: var(--color-primary);
    }
  }
`;
