import React, { useState, useEffect } from "react";

import pc from "../../assets/pc.png";
import OutlinedBlue from "../../assets/outlined-blue.svg";
import halftone from "../../assets/hallftone.png";
import halftoneCut from "../../assets/hallftoneCut.png";
import funcionalidades from "../../data/funcionalidades";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import {EffectBlue, Outlined, EffectBlueGreen, BlueGreenLeft} from '../../assets/effects'
import "@brainhubeu/react-carousel/lib/style.css";

import Card from "../Card";

import {
  Container,
  HeaderWrapper,
  Header,
  HeaderLink,
  Content,
  ContentBody,
} from "./styles";
import FormGroup from "../FormGroup";
import Footer from "../Footer";
import Logo from "../Logo";
import Grafic from "../Grafic";

interface Props {
  variant: "inicio" | "video" | "funcionalidades" | "contato" | "footer";
  title?: string;
  description?: string;
}

const scrollThreshold = 20;

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const [value, setValue] = useState<any>(0);
  const [scrollY, setScrollY] = useState(0);
  const [classGrafic, setClassGrafic] = useState('grafic')

  function onchange(value: number) {
    setValue(value);
  }

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(()=> {
    if(scrollY >= 2200 && classGrafic === 'grafic'){
      setClassGrafic('graficStart grafic')
    }
  }, [classGrafic, scrollY])

  useEffect(() => {
    function Clicked(value: any){
      if(value.target.className === 'BrainhubCarousel__dot BrainhubCarousel__dot--selected'){
        clearTimeout(timeOut);
      }
    }

   window.addEventListener('click', Clicked)

     
    const timeOut = setTimeout(() => {
      switch (value) {
        case 0:
          setValue(1);
          break;
        case 1:
          setValue(2);
          break;
        case 2:
          setValue(3);
          break;
        case 3:
          setValue(0);
          break;
        default:
          break;
      }
    }, 8000);
   
    
  }, [value]);

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header
          className={
            scrollY >= scrollThreshold
              ? "scrollDown " + variant
              : "scrollUp " + variant
          }
        >
          <h1>
            <Logo />
          </h1>
          <HeaderLink></HeaderLink>
        </Header>
      </HeaderWrapper>
      <EffectBlue />
      <Outlined variant="img-outlined" />
      <img className="img-outlined-blue" src={OutlinedBlue} alt="Effect" />
      <img className="img-halfftone" src={halftone} alt="Effect" />
      <img className="img-halfftone-Top" src={halftoneCut} alt="Effect" />
      <Content>
        <ContentBody>
          <h2>{title}</h2>
          <p className={variant}>{description}</p>

          {/* Video */}
          <video controls>
            <source src="../../assets/Mov.MP4" type="video/mp4" />
          </video>

          {/* Inicio Funcionalidades */}
          <div className="card-container">
            <Carousel
              plugins={["infinite"]}
              value={value}
              animationSpeed={2000}
              onChange={onchange}
            >
              <div className="card-group">
                <Card
                  IconVariant="LayerGroup"
                  title={funcionalidades[0].title}
                  description={funcionalidades[0].description}
                />
                <Card
                  IconVariant="CloudMeatBall"
                  title={funcionalidades[1].title}
                  description={funcionalidades[1].description}
                />
                <Card
                  IconVariant="FilePrescription"
                  title={funcionalidades[2].title}
                  description={funcionalidades[2].description}
                />
              </div>
              <div className="card-group">
                <Card
                  IconVariant="ShieldAlt"
                  title={funcionalidades[3].title}
                  description={funcionalidades[3].description}
                />
                <Card
                  IconVariant="SiteMap"
                  title={funcionalidades[4].title}
                  description={funcionalidades[4].description}
                />
                <Card
                  IconVariant="Landmark"
                  title={funcionalidades[5].title}
                  description={funcionalidades[5].description}
                />
              </div>
              <div className="card-group">
                <Card
                  IconVariant="ExclamationTriangle"
                  title={funcionalidades[6].title}
                  description={funcionalidades[6].description}
                />
                <Card
                  IconVariant="BalanceScale"
                  title={funcionalidades[7].title}
                  description={funcionalidades[7].description}
                />
                <Card
                  IconVariant="ProjectDiagram"
                  title={funcionalidades[8].title}
                  description={funcionalidades[8].description}
                />
              </div>
              <div className="card-group">
                <Card
                  IconVariant="Book"
                  title={funcionalidades[9].title}
                  description={funcionalidades[9].description}
                />
                <Card
                  IconVariant="ChartLine"
                  title={funcionalidades[10].title}
                  description={funcionalidades[10].description}
                />
              </div>
            </Carousel>
            <Dots value={value} onChange={onchange} number={4} />
            <Grafic variant={classGrafic} />
            <h2 className="pedidos">+5 MIL PEDIDOS DE CRÉDITO</h2>
            <h2 className="creditos">+15 BILHÕES DE CRÉDITO</h2>
            <h2 className="empresas">+90 EMPRESAS</h2>
          </div>
          < EffectBlueGreen />
          < Outlined variant="img-outlined-func"/>
          < BlueGreenLeft />
          {/* Fim Funcionalidades */}
          <FormGroup />
          <Footer />
        </ContentBody>
        <img src={pc} alt="Pc" />
      </Content>
    </Container>
  );
};

export default Section;
