import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

import AstrobyteLogo from '../../assets/site_astrobyte_logo.07b5c3a4.png';

import useWindowSize from "../useWindowSize.js";

import {
  Nav,
  Container,
  Title,
  Menu,
  MenuItem,
  ToggleButton,
  CloseIcon,
} from "./styles";

function Navbar(){
  const [menuStatus, setMenuStatus] = useState(false);

  const size = useWindowSize();

  const menuHandler = () => {
    setMenuStatus(!menuStatus);
  };

  useEffect(() => {
    if (size.width >= 960) {
      setMenuStatus(false);
    }
  }, [size.width]);

  return (
    <Nav>
      <Container>
        <Title>
          <Link href="/">
            <a>
              <img src={AstrobyteLogo} alt="Astrobyte Logo" />
            </a>
          </Link>
        </Title>
        <ToggleButton onClick={menuHandler}>
          {!menuStatus && <MdMenu />}
        </ToggleButton>
        <Menu isOpen={menuStatus}>
          <CloseIcon isOpen={menuStatus} onClick={menuHandler}>
            <MdClose />
          </CloseIcon>
          <MenuItem>
            <Link href="/">
              <a>Ínicio </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <ScrollLink to="allCourses" spy={true} smooth={true} duration={800}>
              <a href="#allCourses">Cursos</a>{" "}
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <Link href="/entre-em-contato">
              <a>Contato</a>
            </Link>
          </MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
