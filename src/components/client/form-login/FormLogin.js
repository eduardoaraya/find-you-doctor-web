import React, { useState } from 'react';

import styled from 'styled-components';
import Input from '../../shared/widgets/Input';
import Button from '../../shared/widgets/Button';

const Form = styled.form`
    padding:70px 25px;
    .center{
        padding:10px 20px;
    }
`;

const Labe = styled.label`
    font-size:1em;
    font-weight:bold;
    color:#1a3d53;   
    margin:5px 0; 
`;


export default function FormLogin({ handleFormSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit({ email, password });
  };
  return (
    <Form className="fadeIn" onSubmit={handleSubmit}>
      <div className="center">
        <div className="group">
          <Labe>E-mail</Labe>
          <Input placeholder="@mail.com" onChange={(e) => setEmail(e.target.value)} type="text" />
        </div>
        <div className="group">
          <Labe>Senha</Labe>
          <Input placeholder="******" onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <div className="group">
          <Button text="Entrar" />
        </div>
      </div>
    </Form>
  );
}
