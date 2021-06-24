import styled from 'styled-components';

export const Container = styled.div`

  /* width: 100%; */

  form {
    width: 100%;

    div.formGroup {
      width: 100%;

      &:not(:first-child) {
        margin-top: 15px;
      }

      label {
        font-family: Nunito, monospace;
        font-size: 15px;
        line-height: 15px;
        font-weight: bold;
        color: var(--color-dark);
      }

      input,
      textarea {
        width: 100%;
        border: 2px solid #ddd;
        padding: 10px;
        border-radius: 7px;

        &::-webkit-input-placeholder {
          color: #b5b5b5;
        }

        &::-moz-placeholder {
          color: #b5b5b5;
        }

        &:-ms-input-placeholder {
          color: #b5b5b5;
        }

        &:-moz-placeholder {
          color: #b5b5b5;
        }

        &:focus {
          border: 2px solid var(--color-dark);
        }
      }

      textarea {
        height: 55px;
      }
    }

    button {
      border: none;
      background: var(--color-success);
      padding: 12px 20px;
      border-radius: 7px;
      color: var(--color-light);
      font-size: 15px;
      margin-top: 15px;
      transition: 0.5s;

      &:hover {
        background: var(--bs-green);
      }
    }
  }
`;

export const SuccessMessage = styled.div`
  position: absolute;
  z-index: 4444;
  top: 5px;
  right: 5px;
  border-radius: 7px;
  padding: 20px;
  background-color: var(--color-success);
  color: var(--color-light);

  .closebtn {
    margin-left: 15px;
    color: var(--color-light);
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .closebtn:hover {
    color: #fff;
  }
`;
