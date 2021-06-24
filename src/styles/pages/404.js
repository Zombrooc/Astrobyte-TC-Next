import styled, { keyframes } from "styled-components";

const animateSuccessTip = keyframes`
0%,54% {
		width: 0;
		left: 1px;
		top: 19px;
	}

	70% {
		width: 50px;
		left: -8px;
		top: 37px;
	}

	84% {
		width: 17px;
		left: 21px;
		top: 48px;
	}

	100% {
		width: 25px;
		left: 14px;
		top: 45px;
	}
`;

const animateSuccessLong = keyframes`
0%,65% {
  width: 0;
  right: 46px;
  top: 54px;
}

84% {
  width: 55px;
  right: 0;
  top: 35px;
}

100% {
  width: 47px;
  right: 8px;
  top: 38px;
}
`;

const rotatePlaceholder = keyframes`
0%,5% {
		transform: rotate(-45deg);
	}

	100%,12% {
		transform: rotate(-405deg);
	}
`;

const animateErrorIcon = keyframes`
0% {
		transform: rotateX(100deg);
		opacity: 0;
	}

	100% {
		transform: rotateX(0deg);
		opacity: 1;
	}
`;

const animateXLeft = keyframes`

0%,
	65% {
		left: 82px;
		top: 95px;
		width: 0;
	}

	84% {
		left: 14px;
		top: 33px;
		width: 47px;
	}

	100% {
		left: 17px;
		top: 37px;
		width: 47px;
	}

`;

const animateXRight = keyframes`
0%,
	65% {
		right: 82px;
		top: 95px;
		width: 0;
	}

	84% {
		right: 14px;
		top: 33px;
		width: 47px;
	}

	100% {
		right: 16px;
		top: 37px;
		width: 47px;
	}
`;

const scaleWarning = keyframes`
0% {
		transform: scale(1);
	}
	
	30% {
		transform: scale(1.02);
	}
	
	100% {
		transform: scale(1);
	}
`;

const pulseWarning = keyframes`
0% {
		background-color: #f5f5f5;
		transform: scale(1);
		opacity: 0.5;
	}

	30% {
		background-color: #f5f5f5;
		transform: scale(1);
		opacity: 0.5;
	}

	100% {
		background-color: #F8BB86;
		transform: scale(2);
		opacity: 0;
	}
`;

const pulseWarningIns = keyframes`
0% {
        background-color: #F8D486;
    }

    100% {
        background-color: #F8BB86;
    }`;

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: var(--color-light);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-dark);

  button {
    display: block;
    background: var(--color-primary);
    color: var(--color-light);
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: var(--color-info);
  }

  .f-modal-alert {
    margin: 20px;
    padding: 50px;
  }

  .f-modal-alert .f-modal-icon {
    border-radius: 50%;
    border: 4px solid gray;
    box-sizing: content-box;
    height: 80px;
    margin: 20px auto;
    padding: 0;
    position: relative;
    width: 80px;

    // Success icon
    &.f-modal-success,
    &.f-modal-error {
      border-color: #a5dc86;

      &:after,
      &:before {
        background: #f5f5f5;
        content: "";
        height: 120px;
        position: absolute;
        transform: rotate(45deg);
        width: 60px;
      }

      &:before {
        border-radius: 120px 0 0 120px;
        left: -33px;
        top: -7px;
        transform-origin: 60px 60px;
        transform: rotate(-45deg);
      }

      &:after {
        border-radius: 0 120px 120px 0;
        left: 30px;
        top: -11px;
        transform-origin: 0 60px;
        transform: rotate(-45deg);
      }

      .f-modal-placeholder {
        border-radius: 50%;
        border: 4px solid rgba(165, 220, 134, 0.2);
        box-sizing: content-box;
        height: 80px;
        left: -4px;
        position: absolute;
        top: -4px;
        width: 80px;
        z-index: 2;
      }

      .f-modal-fix {
        background-color: #f5f5f5;
        height: 90px;
        left: 28px;
        position: absolute;
        top: 8px;
        transform: rotate(-45deg);
        width: 5px;
        z-index: 1;
      }

      .f-modal-line {
        background-color: #a5dc86;
        border-radius: 2px;
        display: block;
        height: 5px;
        position: absolute;
        z-index: 2;

        &.f-modal-tip {
          left: 14px;
          top: 46px;
          transform: rotate(45deg);
          width: 25px;
        }

        &.f-modal-long {
          right: 8px;
          top: 38px;
          transform: rotate(-45deg);
          width: 47px;
        }
      }
    }

    // Error icon
    &.f-modal-error {
      border-color: #f27474;

      .f-modal-x-mark {
        display: block;
        position: relative;
        z-index: 2;
      }

      .f-modal-placeholder {
        border: 4px solid rgba(200, 0, 0, 0.2);
      }

      .f-modal-line {
        background-color: #f27474;
        top: 37px;
        width: 47px;

        &.f-modal-left {
          left: 17px;
          transform: rotate(45deg);
        }

        &.f-modal-right {
          right: 16px;
          transform: rotate(-45deg);
        }
      }
    }

    // Warning icon

    &.f-modal-warning {
      border-color: #f8bb86;

      &:before {
        animation: ${pulseWarning} 2s linear infinite;
        background-color: #f5f5f5;
        border-radius: 50%;
        content: "";
        display: inline-block;
        height: 100%;
        opacity: 0;
        position: absolute;
        width: 100%;
      }

      &:after {
        background-color: #f5f5f5;
        border-radius: 50%;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1;
      }
    }

    &.f-modal-warning .f-modal-body {
      background-color: #f8bb86;
      border-radius: 2px;
      height: 47px;
      left: 50%;
      margin-left: -2px;
      position: absolute;
      top: 10px;
      width: 5px;
      z-index: 2;
    }

    &.f-modal-warning .f-modal-dot {
      background-color: #f8bb86;
      border-radius: 50%;
      bottom: 10px;
      height: 7px;
      left: 50%;
      margin-left: -3px;
      position: absolute;
      width: 7px;
      z-index: 2;
    }

    .f-modal-icon {
      margin-top: 50px;
    }
  }

  .animateSuccessTip {
    animation: ${animateSuccessTip} 0.75s;
  }

  .animateSuccessLong {
    animation: ${animateSuccessLong} 0.75s;
  }

  .f-modal-icon.f-modal-success.animate:after {
    animation: ${rotatePlaceholder} 4.25s ease-in;
  }

  .f-modal-icon.f-modal-error.animate:after {
    animation: ${rotatePlaceholder} 4.25s ease-in;
  }

  .animateErrorIcon {
    animation: ${animateErrorIcon} 0.5s;
  }

  .animateXLeft {
    animation: ${animateXLeft} 0.75s;
  }

  .animateXRight {
    animation: ${animateXRight} 0.75s;
  }

  .scaleWarning {
    animation: ${scaleWarning} 0.75s infinite alternate;
  }

  .pulseWarningIns {
    animation: ${pulseWarningIns} 0.75s infinite alternate;
  }
`;

export const CenterBox = styled.div`
  width: 650px;
  height: auto;
  padding: 20px;

  p {
    font-size: 1.3rem;
    text-align: center;
  }
`;
