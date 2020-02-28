import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import AvatarDefault from '../../../assets/avatar.png';
import thema from '../thema';
import Button from './Button';

const Avatar = styled.img`
    width:100%;
    flex:1;
`;

const Wrapper = styled.div`
    width:107px;
    height:107px;
    background:${thema.colorLight};
    border-radius:5px;
    overflow:hidden;
    margin:0 auto;
    box-shadow:inset 0 0 5px -3px rgba(0,0,0,.15);
    cursor: pointer;
    transition:.3s;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export default function PictureAvatar({ changePic, ...props }) {
  const refInput = useRef(null);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setSrc(AvatarDefault);
  }, []);

  const previewImage = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
  };

  const handleChangePic = (e) => {
    previewImage(e);
    changePic(e.target.files[0]);
  };

  return (
    <>
      <Wrapper>
        <Avatar src={src} />
      </Wrapper>
      <input {...props} type="file" hidden ref={refInput} onChange={handleChangePic} />
      <Button style={{ maxWidth: '200px' }} type="button" text="Adicionar uma foto" onClick={() => refInput.current.click()} />
    </>
  );
}
