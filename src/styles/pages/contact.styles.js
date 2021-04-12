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

    &.sm {
      display: flex;
      justify-content: center;

      @media screen and (max-width: 750px) {
        align-items: center;
      }
    }

    a {
      &:not(:first-child) {
        margin-left: 30px;
      }

      width: 80px;
      height: 80px;
      background-color: var(--color-light);
      display: inline-block;
      border-radius: 24px;
      box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15),
        -6px -6px 12px rgba(255, 255, 255, 0.1);
      overflow: hidden;
      font-size: 28px;
      transition: 0.3s linear;
      position: relative;
    }

    a:hover {
      transform: scale(1.3);
      border-radius: 50%;
    }

    a i::before {
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      background-size: 200% 200%;
      background-position: 75% 75%;
      top: 0;
      left: 0;
      line-height: 80px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: background 0.5s linear;
    }

    a:hover i::before {
      background-position: 0% 0%;
    }

    .fa-facebook-f::before {
      background-image: linear-gradient(135deg, #3b5998 30%, #0a3d62 50%);
    }

    .fa-instagram::before {
      background-image: linear-gradient(135deg, #c32aa3 30%, #0a3d62 50%);
    }

    .fa-whatsapp::before {
      background-image: linear-gradient(135deg, #00e676 30%, #0a3d62 50%);
    }
  }

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
        height: 100px;
      }
    }

    button {
      border: none;
      background: var(--color-success);
      padding: 15px 30px;
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
