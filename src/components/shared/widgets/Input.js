import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import thema from '../thema';

const InputStyle = styled.input`
    height:55px;
    background:#FFF;
    box-shadow:0px 4px 13px -7px #DDD;
    border:none;
    padding:10px;
    width:100%;
    border-bottom:solid 2px ${thema.colorPrimary};
    font-size:16px;
`;

export default function Input(props) {
  if (props.mask) {
    return (
      <InputMask mask={props.mask} onChange={props.onChange}>
        { (inputProps) => <InputStyle autoFocus={false} {...inputProps} /> }
      </InputMask>
    );
  }

  return (
    <InputStyle autoFocus={false} {...props} />
  );
}
