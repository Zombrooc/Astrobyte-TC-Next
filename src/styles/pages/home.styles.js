import styled from "styled-components";

import FirstBlockImage from "../../assets/FirstBlockImage.jpg";

export const Title = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--color-light);

  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  p {
    font-size: 17px;
  }
`;

export const Achivements = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
`;

export const AchivementsItems = styled.div`
  max-width: 300px;
  width: 100%;
  max-height: 150px;
  color: var(--color-light);
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;

  svg {
    font-size: 22px;
    margin: 5px;
  }

  & {
    border-top: 1px solid var(--color-light);
  }

  &:last-child {
    border-bottom: 1px solid var(--color-light);
  }
`;

export const MainBlock = styled.div`
  background-image: url(${FirstBlockImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: grid;
  padding: 0.5rem 7rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "Left-Side Right-Side";

  .Left-Side {
    grid-area: Left-Side;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Right-Side {
    grid-area: Right-Side;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    /* height: 100% !important; */
    padding: 20px;
    height: 100%;

    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    grid-template-areas:
      "Left-Side"
      "Right-Side";

    /* .Right-Side {
      display: none;
    } */

    ${Title} {
      margin-top: 8rem;
      padding-bottom: 5em;
      text-align: center;
    }

    ${Achivements} {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    ${Title}, ${Achivements} {
      width: auto;
      height: auto;
      padding: 0;
    }
  }
`;

export const CallToAction = styled.p`
  margin-top: 50px;
  color: var(--color-danger);
  text-decoration: none;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s ease all;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  width: 270px;
  font-weight: bold;
  padding: 14px 0px;
  border: 3px solid var(--color-danger);
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  cursor: pointer;

  &:hover {
    color: var(--color-light);
  }
  &:focus {
    color: var(--color-light);
  }

  &:before {
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: var(--color-danger);
    z-index: -1;
  }
  &:hover {
    &:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
  &:focus {
    &:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
`;

export const Block = styled.div`
  width: 100%;
  padding: 20px 5%;
  background: var(--color-light);

  .coursesAccordion {
    margin-top: 25px;
  }

  .card-header {
    background: #fff;
    font-family: Nunito, sans-serif !important;
    font-size: 18px;
    font-weight: 900;
  }

  .card-body {
    display: flex;
    flex-direction: column;

    a {
      padding: 15px;
      font-size: 16px;
      font-weight: 500;

      &:not(:first-child) {
        border-top: 1px solid var(--color-dark);
      }
    }
  }
`;

export const BlockTitle = styled.div`
  height: 1px;
  background-color: #333;
  text-align: center;
  margin-top: 50px;

  span {
    background-color: var(--color-light);
    position: relative;
    top: -0.7em;
    padding: 0 20px;
    font-size: 25px;
  }
`;

export const CourseItem = styled.div`
  grid-area: ${(props) => props.gridArea};
  text-align: center;

  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  background: var(--color-primary);
  transition: 0.5s;

  a {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  svg {
    font-size: 40px;
    color: var(--color-light);
    margin-bottom: 15px;
  }

  span {
    font-size: 20px;
    color: var(--color-light);
    margin-top: 10px;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

export const Courses = styled.div`
  a {
    text-decoration: none;
  }

  margin-top: 80px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "FirstCourse FirstCourse SecondCourse SecondCourse ThirdCourse ThirdCourse"
    "FirstCourse FirstCourse SecondCourse SecondCourse ThirdCourse ThirdCourse"
    "FirstCourse FirstCourse SecondCourse SecondCourse ThirdCourse ThirdCourse"
    "FourthyCourse FourthyCourse FiftyCourse FiftyCourse SixthyCourse SixthyCourse"
    "FourthyCourse FourthyCourse FiftyCourse FiftyCourse SixthyCourse SixthyCourse"
    "FourthyCourse FourthyCourse FiftyCourse FiftyCourse SixthyCourse SixthyCourse";

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "FirstCourse FirstCourse SecondCourse SecondCourse"
      "FirstCourse FirstCourse SecondCourse SecondCourse"
      "FirstCourse FirstCourse SecondCourse SecondCourse"
      " ThirdCourse ThirdCourse FourthyCourse FourthyCourse"
      " ThirdCourse ThirdCourse FourthyCourse FourthyCourse"
      " ThirdCourse ThirdCourse FourthyCourse FourthyCourse"
      "FiftyCourse FiftyCourse SixthyCourse SixthyCourse"
      "FiftyCourse FiftyCourse SixthyCourse SixthyCourse"
      "FiftyCourse FiftyCourse SixthyCourse SixthyCourse";

    ${CourseItem} {
      svg {
      }

      span {
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "FirstCourse"
      "FirstCourse"
      "SecondCourse"
      "SecondCourse"
      "ThirdCourse"
      "ThirdCourse"
      "FourthyCourse"
      "FourthyCourse"
      "FiftyCourse"
      "FiftyCourse"
      "SixthyCourse"
      "SixthyCourse";

    ${CourseItem} {
      height: 200px;

      svg {
        font-size: 22px;
      }
    }
  }
`;

export const CourseCard = styled.div`
  margin-top: 15px;
  padding: 25px;
  font-family: Nunito;
  font-weight: 400;

  border: 1px solid #ddd;
  border-radius: 20px;

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    div {
      width: 50%;

      &.image {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h2,
      p {
        padding: 12px;
      }

      img {
        width: 40%;
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
