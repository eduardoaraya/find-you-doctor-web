import React from 'react';
import styled from 'styled-components';
import thema from '../thema';

const ButtonStyle = styled.button`
    padding:10px 20px;
    height:45px;
    transition:.3s;
    border:none;
    text-transform:uppercase;
    font-weight:bold;
    margin:10px auto;
    border-radius:5px;
    width:100%;
    color:${thema.colorSecundary};
    &:hover{
        background:${thema.colorPrimary};
        color:#FFF;
    }
`;

export default function Button({ text, ...props }) {
  return (
    <ButtonStyle {...props}>
      {text}
    </ButtonStyle>
  );
}
