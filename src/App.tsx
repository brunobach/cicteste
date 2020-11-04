import React from "react";

import GlobalStyles from "./styles/globalStyles";
import Section from "./components/Section";
import { Element, scroller } from "react-scroll";

import data from "./data";
import SideMenu from "./components/SideMenu";

function App() {
  function scrollTo() {
    scroller.scrollTo("contato", {
      duration: 200,
      delay: 0,
      smooth: "easeOutQuart",
    });
  }
  return (
    <div className="App">
      <SideMenu></SideMenu>
      <div className="informe">
        <span>Planos a partir de R$500 mensais.</span>
        <button onClick={() => scrollTo()}>SAIBA MAIS</button>
      </div>

      <Section
        variant="inicio"
        title={data[0].title}
        description={data[0].description}
      />
      <Element name="video">
        <Section variant="video" />
      </Element>
      <Element name="funcionalides">
        <Section
          variant="funcionalidades"
          title={data[1].title}
          description={data[1].description}
        />
      </Element>
      <Element name="contato">
        <Section
          variant="contato"
          title={data[2].title}
          description={data[2].description}
        />
      </Element>
      <Section
        variant="footer"
        title={data[4].title}
        description={data[4].description}
      />
      <GlobalStyles />
    </div>
  );
}

export default App;
