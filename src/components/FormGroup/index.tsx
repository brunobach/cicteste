import React from "react";

import { Container, FormGroupSection } from "./styles";

const FormGroup: React.FC = () => {
  return (
    <Container id="contato">
      <FormGroupSection>
        <input type="text" placeholder="Nome Completo"></input>
        <input type="text" placeholder="Empresa"></input>
        <input type="number" placeholder="Celular"></input>
        <input type="email" placeholder="E-mail"></input>
        <input type="text" placeholder="Site"></input>
        <textarea placeholder="Mensagem"></textarea>
        <button className="buttonClass" type="button">ENVIAR</button>
        <span>Estamos prontos para atender e resolver!</span>
      </FormGroupSection>
    </Container>
  );
};

export default FormGroup;
