import styled from "styled-components";
import {GrLinkedinOption} from 'react-icons/gr'

export const Container = styled.div`

`;
export const FooterContent = styled.div`
  #textoLogo {
    fill: white;
  }
  #LogoMenor {
    fill: white;
  }
  #logoMaior {
    fill: white;
  }
  #verdeLogo {
    fill: white;
  }
  p {
      margin-top: 15px;
      margin-left: 13px;
      font-family: 'Noto Sans';
      color: white;
  }
`;

export const LinkedinIcon = styled(GrLinkedinOption)`
    width: 32px;
    height: 32px;
    fill: white;
`
export const IconContent = styled.div`
    cursor: pointer;
    position: absolute;
    bottom: 100%;
    left: 75%;
    padding: 4px;
    border: 1.5px solid white;
    width: 45px;
    border-radius: 50%;

`