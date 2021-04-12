import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 72px;
  background: var(--color-light);
  display: flex;
  align-items: center;
  font-family: "Nunito", sans-serif !important;

  z-index: 4444;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 5rem;
  flex-wrap: wrap;
  overflow: hidden;

  @media screen and (max-width: 630px) {
    margin: 0.2rem 3rem;
  }

  @media screen and (max-width: 400px) {
    margin: 0.1rem 1rem;
  }
`;

export const Title = styled.div`
  padding-top: 5px;
  flex: 1;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: ${(props) => (props.isOpen ? "100vw" : "0")};
    height: 100vh;
    background: var(--color-dark);
    transition: width 0.5s ease;
    overflow: hidden;

    a {
      color: var(--color-light);
    }   
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a,
  button {
    font-weight: 600;
    border: none;
    text-transform: uppercase;
    padding: 1rem 2.5rem;
    background-color: transparent;
    transform: background-color 0.5s;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    font-size: 11px;
    text-decoration: none;

    button:hover {
      color: #fff;
    }

    &.active {
      background-color: var(--color-danger);
      transition: 0.3s;
      color: var(--color-light) !important;
      border-radius: 7px;

      &:hover {
        background-color: var(--color-danger);
      }
    }
  }
`;

export const ToggleButton = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* width: 50%; */
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none !important;
  }
`;

export const CloseIcon = styled.div`
  font-size: 3rem;
  color: var(--color-light);
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
