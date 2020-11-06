import React, { FormEvent, useState } from "react";
import { Container, FormGroupSection } from "./styles";
import api from '../../services/api';

const FormGroup: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [site, setSite] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

  async function handleSendEmail(e: FormEvent) {
    e.preventDefault();
    
    await fetch(api, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify({
        name,
        company,
        site,
        contact,
        email,
        message,
      })
    });
    setName('');
    setCompany('');
    setSite('');
    setContact('');
    setEmail('');
    setMessage('');
    alert('Contato Realizado com sucesso.');
  }


  return (
    <Container id="contato">
      <FormGroupSection>
        <form onSubmit={handleSendEmail}>
        <input type="text" placeholder="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Empresa"
        value={company}
        onChange={(e) => setCompany(e.target.value)}/>
        <input type="text" placeholder="Site" 
        value={site}
        onChange={(e) => setSite(e.target.value)}/>
        <input type="number" placeholder="Celular"
        value={contact}
        onChange={(e) => setContact(e.target.value)}/>
        <input type="email" placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <textarea placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}/>
        <button className="buttonClass" type="submit"
        >ENVIAR</button>
        <span>Estamos prontos para atender e resolver!</span>
        </form>
      </FormGroupSection>
    </Container>
  );
};

export default FormGroup;
