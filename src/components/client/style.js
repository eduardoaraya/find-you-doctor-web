import styled from 'styled-components';

export const Header = styled.header`
    width:100%;
    height:120px;
    background:#FFF;
    box-shadow:0px 3px 15px -5px rgba(77,77,77,.15);
    top:0;
    left:0;
    position:fixed;
    .container{
        display:flex;
        align-items:center;
        height:100%;
        position:relative;
    }
`;

export const Content = styled.section`
    max-width:1140px;
    width:100%;
    margin:0 auto;
`;

export const Logo = styled.img`
    max-width:100px;
`;


export const Navigator = styled.nav`
    width:calc(100% - 100px);
    height:100%;
    position:relative;
`;
