import React from "react";
import Logo from "../Logo";

import { Container, FooterContent, LinkedinIcon, IconContent } from "./styles";

function openLink() {
  window.open("https://www.linkedin.com/company/cic-controle/", "_blank");
}

const Footer: React.FC = () => {
  return (
    <Container className="footerClass">
      <FooterContent>
        <Logo />
        <p>contato@perdcomp.com.br</p>
      </FooterContent>
      <IconContent>
        <div onClick={() => openLink()}>
          <LinkedinIcon />
        </div>
      </IconContent>
    </Container>
  );
};

export default Footer;
