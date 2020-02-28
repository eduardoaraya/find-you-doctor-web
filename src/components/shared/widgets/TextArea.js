import React from 'react';
import styled from 'styled-components';
import thema from '../thema';

const Text = styled.textarea`
    width:100%;
    min-height:155px;
    height:auto;
    resize:none;
    background:#FFF;
    border-radius:3px;
    box-shadow:0px 4px 13px -4px #DDD;
    border:none;
    border-bottom:solid 2px ${thema.colorPrimary};
    padding:10px;
    font-size:16px;
`;

export default function TextArea({ text, ...props }) {
  return (
    <Text {...props}>
      {text}
    </Text>
  );
}
