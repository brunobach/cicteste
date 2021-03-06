import styled from "styled-components";
import { HiMenu } from "react-icons/hi";

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --padding-left: 32px;
  --padding-right: 32px;
  --heading-font-size: 3.5rem;
  --content-width: 100%;
  --video-display: none;
  --direction-flex: row;
  --card-display: none;
  --image-display: none;
  --form-display: none;
  --footer-display: none;
  --menu-hamburguer: var(--color-primary);
  --margin-left: auto;
  --margin-right: auto;
  --margin-top: 50px;
  --image-func: none;
  --image-contact: none;
  --width-h2: 100%;
  &.video {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
    background: linear-gradient(
      -3deg,
      var(--color-tertiary) calc(15% - 1px),
      var(--color-primary) 15%
    );
    --video-display: hidden;
    --logoInversa: white;
    --padding-top: 120px;
    --margin-top: 0;
    --menu-hamburguer: white;
  }
  &.funcionalidades {
    --bg-color: var(--color-secondary);
    --next-color: var(----color-border);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
    --content-width: 75%;
    --margin-left: auto;
    --card-display: hidden;
    --direction-flex: column;
    --alignH2: center;
    --alignP: justify;
    --image-func: hidden;
    background: linear-gradient(
      6deg,
      var(--color-border) calc(20% - 1px),
      var(--color-secondary) 20%
    );
    --logoInversa: --color-primary;
  }
  &.inicio {
    --bg-color: var(--color-tertiary);
    --next-color: var(--color-primary);
    --text-color: var(--color-description);
    --logo-color: var(--color-primary);
    --image-display: hidden;
    --padding-top: 20vh;
    --alignH2: left;
    --alignP: justify;
    --logoInversa: #a4a2a2;
    --margin-top: 0px;
    --width-h2: 50%;

    @media(max-width: 800px){
      --padding-left: 2rem;
      --padding-right: 2rem;
    }
  }
  &.contato {
    --bg-color: var(--color-border) !important;
    --text-color: var(--color-description);
    --logo-color: var(--color-blue);
    --content-width: 75%;
    --direction-flex: column;
    --alignH2: center;
    --alignP: center;
    --margin-left: auto;
    --image-contact: hidden;
    background: linear-gradient(
      5deg,
      var(--color-primary) calc(20% - 1px),
      var(--color-border) 20%
    );
    --form-display: hidden;
  }

  &.footer {
    --bg-color: var(--color-primary);
    --next-color: var(--color-primary);
    --text-color: var(--color-description);
    --footer-display: hidden;
    --alignH2: left;
    --alignP: justify;
    --padding-top: 0px;
    --padding-bottom: 0px;
    --margin-left: 0;
    --margin-right: 0;
    --margin-top: -150px;
    margin-left: 0;
    height: 200px;
  }

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;
    @media (min-width: 1024px) {
      --content-width: 90%;
      --heading-font-size: 40px;
    }
  }
  &:nth-child(2) {
    --text-align: row;
    --margin-left: 9%;
    --content-width: 100%;
  }
  --text-align: column;

  background: linear-gradient(
    3deg,
    var(--next-color) calc(15% - 1px),
    var(--bg-color) 15%
  );
  position: relative;
  .img-effect {
    display: var(--image-display);
    position: absolute;
    left: -2%;
    top: -5%;
    width: 20rem;
  }
  .img-outlined {
    display: var(--image-display);
    position: absolute;
    width: 20rem;
    left: -3%;
    top: -20%;
  }
  .img-outlined-blue {
    display: var(--image-display);
    position: absolute;
    right: 0%;
    top: 55%;
    width: 25rem;
  }
  .img-halfftone {
    display: var(--image-display);
    position: absolute;
    right: 13%;
    top: 25%;
    width: 10rem;
    opacity: 0.4;
  }
  .img-halfftone-Top {
    display: var(--image-display);
    position: absolute;
    right: 0%;
    z-index: 20;
    top: 0%;
    width: 5rem;
    opacity: 0.3;
  }
  .img-blue-green {
    display: var(--image-func);
    width: 22rem;
    position: absolute;
    top: 30%;
    right: -12.5%;
  }
  .img-blue-green-left {
    display: var(--image-contact);
    width: 23rem;
    position: absolute;
    top: -10%;
    left: -15%;
  }
  .img-outlined-func {
    display: var(--image-func);
    width: 20rem;
    position: absolute;
    top: 10%;
    left: -15%;
    transform: rotateX(3.142rad);
    > path {
      stroke: var(--color-primary);
    }
  }

  @media (max-width: 1280px) {
    .img-effect,
    .img-outlined,
    .img-outlined-blue,
    .img-halfftone,
    .img-halfftone-Top,
    .img-blue-green-left,
    .img-outlined-func,
    .img-blue-green {
      display: none;
    }
  }

  
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip: rect(auto, auto, auto, auto);
`;

export const HeaderLink = styled.div`
  display: flex;
  flex-grow: 1;
  pointer-events: all;

  > a {
    color: var(--text-color);
    outline: none;
    text-decoration: none;
    margin-top: 5px;
    padding: 20px 15px;
    font-size: 16px;
    appearance: none;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Header = styled.header`
  z-index: 3;
  background: var(--bg-color);

  display: flex;
  align-items: center;

  padding: 20px 0 0 10%;
  padding-bottom: 10px;
  > h1 {
    flex-grow: 0;
    > span {
      color: var(--text-color);
      margin: 10px 16px;
      width: 35%;
      word-wrap: break-word;
      font-weight: 700;
      font-size: 15px;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  &.video {
    #LogoMenor {
      fill: white;
    }
    #logoMaior {
      fill: white;
    }
    #verdeLogo {
      fill: white;
    }
  }
  &.scrollUp {
    margin-top: 50px;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    padding: 20px 0 0 5%;
    margin-left: 10.1vh;
    #textoLogo {
      fill: #a4a2a2;
    }
    .text {
      display: none;
    }
    @media(max-width: 800px){
      margin-left: 0;
      h1 {
      margin: 0;
    }
    }
  }
  > h2 {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    max-width: 50%;
    letter-spacing: -.05rem;
    font-family: 'Poppins', sans-serif;
  }
  &.scrollDown {
    animation: slide-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    #textoLogo {
      fill: transparent;
    }
    .text {
      color: var(--color-primary);
      &.video {
        color: white;
      }
    }
  }
  @media (max-width: 800px){
      .text {
      display: none;
    }
  }
  @keyframes slide-top {
    0% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes slide-bottom {
    0% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @media (max-width: 600px) {
    justify-content: center;
    > h1 {
      margin-left: 25vw;
    }
  }

`;
export const ButtonHamburger = styled(HiMenu)`
  width: 60px;
  height: 60px;
  margin-right: 20%;
  fill: var(--menu-hamburguer);
`;
export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: var(--direction-flex);

  

  > img {
    position: absolute;
    width: 50%;
    top: 20%;
    right: -50px;
    margin-top: -4rem;
    display: var(--image-display);
    @media (max-width: 1280px) {
      display: none;
    }
  }

  padding: var(--padding-top) var(--padding-right) var(--padding-bottom)var(--padding-left);
  
 
  @media (max-width: 1280px) {
    margin: 0 5%;
    max-width: 100%;
    padding: var(--padding-top) 0 var(--padding-bottom) 0;

  }
  @media (max-width: 600px) {
      max-width: 100%;
      margin: 0 5%;
      padding-top: 20vh;
  }
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--content-width);
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  margin-top: var(--margin-top);

  @media (max-width: 600px) {
      max-width: 100%;
      margin: 0px;
      padding: 0px;
  }


  > h2 {
    font-size: var(--heading-font-size);
    color: var(--color-blue);
    line-height: 4rem;
    letter-spacing: -0.15rem;
    text-align: var(--alignH2);
    width: var(--width-h2);
    @media (max-width: 1280px) {
     width: 100%;
    }
    @media (max-width: 600px) {
      font-size: 2.1rem;
      letter-spacing: -2px;
      line-height: 45px;
    }
  }
  > p {
    margin-top: 20px;
    font-size: 17px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.3px;
    text-align: var(--alignP);
    font-family: "Poppins", sans-serif;
    text-justify: inter-word;
    color: var(--text-color);
    max-width: var(--content-width);
    width: var(--width-h2);

    @media(max-width: 800px){
      max-width: 100%;
    }
    @media (max-width: 1280px) {
     width: 100%;
    }
    
    &.contato {
      margin-left: auto;
      margin-right: auto;
      text-justify: justify;
      line-height: 1.2rem;
      font-size: 1.1rem;
      text-align: justify;
      font-family: "Poppins";
      margin-bottom: 3rem;
    }
  }
  > video {
    display: var(--video-display);
    width: 70vw;

    @media (max-width: 600px) {
      width: 300px;
    }
  }
  .card-container {
    display: var(--card-display);
  }
  .card-group {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .card-box {
      width: 28%;
    }
  }

  input,
  textarea,
  .buttonClass,
  span {
    display: var(--form-display);
  }

  .footerClass {
    margin-top: 0px;
    display: var(--footer-display);
  }
  .BrainhubCarousel__dot--selected {
    background-color: #c4c4c4;
  }
  .BrainhubCarousel__dots,
  .BrainhubCarousel__dot--selected {
    li {
      box-shadow: 0px 6px 15px -4px rgba(186,186,186,1);
    }
    li:nth-child(1) {
      border: 2px solid #000;
      border-width: 2px 0px 2px 2px;
      border-image: linear-gradient(70deg,
        var(--color-primary),
          var(--color-green));
      border-image-slice: 1;
      animation: animate 8s linear infinite;
    }
    li:nth-child(2) {
      border: 2px solid #000;
      border-width: 2px 2px 2px 0px;
      border-image: linear-gradient(-70deg,
        var(--color-primary),
          var(--color-green));
      border-image-slice: 1;
      animation-delay: 12s;
      animation: animate-01 8s linear infinite;
    }
  }
  @keyframes animate {
    0% {
      background: linear-gradient(
        90deg,
        rgba(232, 232, 232, 0.1) 0%,
        rgba(175, 175, 175, 0.1) 100%
      );
    }
    50% {
      background: linear-gradient(
        90deg,
        rgba(232, 232, 232, 0.5) 0%,
        rgba(175, 175, 175, 0.5) 100%
      );
    }
    100% {
      background: linear-gradient(
        90deg,
        rgba(232, 232, 232, 1) 0%,
        rgba(175, 175, 175, 1) 100%
      );
    }
  }
  @keyframes animate-01 {
    0% {
      background: linear-gradient(
        90deg,
        rgba(175, 175, 175, 0.1) 0%,
        rgba(136, 136, 136, 0.1) 100%
      );
    }
    50% {
      background: linear-gradient(
        90deg,
        rgba(175, 175, 175, 0.5) 0%,
        rgba(136, 136, 136, 0.5) 100%
      );
    }
    100% {
      background: linear-gradient(
        90deg,
        rgba(175, 175, 175, 1) 0%,
        rgba(136, 136, 136, 1) 100%
      );
    }
  }

  .grafic {
    margin-top: 15rem;
    margin-left: -5rem;
    width: 50%;
    max-width: 50rem;

    &.graficStart {
      .elipseVerde {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 4s ease-in forwards;
      }
      .elipseAzulClaro{
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 4s ease-in forwards;
      }
      .elipseAzulEscuro {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 6.5s ease-in forwards;
        animation-iteration-count: 1;
      }
      .stick {
        opacity: 0;
        animation: stickDash 2s ease-in forwards;
      }
    }

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }

    @media(max-width: 800px){
      margin-left: 0;
      width: 70%;
    }
  }
  .creditos {
    color: #a6ce39;
    opacity: 0;
    position: absolute;
    font-size: 3rem;
    top: 76%;
    left: 34%;
    animation-delay: 6s;
    animation: stickDash 2s ease-in forwards;
  }
  .pedidos {
    color: #3069b3;
    opacity: 0;
    font-size: 3rem;
    position: absolute;
    top:80%;
    left: 34%;
    animation-delay: 6s;
    animation: stickDash 2s ease-in forwards;
  }
  .empresas {
    color: #00b8f1;
    font-size: 3rem;
    opacity: 0;
    position: absolute;
    top: 72%;
    left: 34%;
    animation-delay: 6s;
    animation: stickDash 2s ease-in forwards;
  }
  @keyframes stickDash {
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1600px) {
    .card-group {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .card-box {
        width: 28%;
      }
    }
  }
  @media(max-width: 800px) {
    .card-group {
      .card-box {
        width: 100%;
      }
    }

    .pedidos {
      font-size: 15px;
      top: 91%;
      left: 64%;
    }
    .creditos {
      font-size: 15px;
      top: 90%;
      left: 64%;
    }
    .empresas {
      font-size: 15px;
      top: 89%;
      left: 64%;
    }
  }
`;
