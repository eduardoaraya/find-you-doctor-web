import styled from 'styled-components';

import banner from '../../../assets/bg1.jpg';
import thema from '../../../components/shared/thema';

export const Flex = styled.div`
    display:flex;
    flex-direction:row-reverse;
    flex-wrap:wrap;
`;

export const Header = styled.header`
    height:70px;
    width:50%;
    position:fixed;
    right:0;
    top:0;
    background:#FFF;
    z-index: 999;
    box-shadow:0px 5px 3px -3px rgba(105,105,105,.15);
    @media(max-width:1000px){
        width:100%;
    }
`;

export const BackgroundBanner = styled.section`
    width:50%;
    background:#FFF;
    @media(max-width:1000px){
        width:100%;
        background:transparent;
        padding-top:105px;
    }
    min-height:100vh;
    z-indeX:9;
    &.bg-left{
        z-indeX:9;
        background:url(${banner});
        position:fixed;
        left:0;
        top:0%;
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
        @media(max-width:1000px){
            /* position:relative;
            height:20vh; */
        }
        &:before{
            content:'';
            position:fixed;
            top:0;
            left:0%;
            display:block;
            width:100%;
            height:100%;
        }
    }
    display:flex;
    justify-content:center;
    align-items:center;
    @media(max-width:900px){
        padding:105px 25px 25px 25px;
    }
    padding:105px 40px;
    @media(max-width:1000px){
        .alert{
            position:fixed;
            bottom:0;
            left:0;
            z-index:99999999;
            width:100%;
        }
    }
`;

export const BoxForm = styled.div`
    position:relative;
    z-index:1;
    width:50%;
    max-width:300px;
    height:100%;
    background:#FFF;
    grid-column:2/3;
    @media(max-width:900px){
        width:100%;
        grid-column:1/5;
        max-width:100%;
    }
    /* box-shadow:0px 15px 20px -10px rgba(105,105,105,.15); */
    transition:.3s;
    min-width:400px;
    overflow:hidden;
    &.full{
        width:100%;
        max-width:800px;
    }
`;

export const Logo = styled.img`
    max-width:70px;
    grid-column:2/3;
    grid-row:1/2;
    margin:0 auto;
    margin-top:55px;
`;

export const Tab = styled.ul`
    width:100%;
    list-style:none;
    display:flex;
    flex-direction:row;
    max-width:400px;
    user-select:none;
    padding:20px;
`;

export const Item = styled.li`
    flex:1;
    padding:20px;
    text-transform:uppercase;
    background:${thema.colorPrimary};
    cursor: pointer;
    user-select:none;
    transition:.5s;
    border-radius:4px 4px 0 0;
    color:#FFF;
    box-shadow:inset -5px 0px 4px -5px rgba(0,0,0,0.15) , inset 0px -5px 4px -5px rgba(0,0,0,0.15) , inset 5px 0px 4px -5px rgba(0,0,0,0.15);
    &.active{
        box-shadow:-5px 0px 4px -5px rgba(0,0,0,0.15) , 0px -5px 4px -5px rgba(0,0,0,0.15) ,  5px 0px 4px -5px rgba(0,0,0,0.15);
        background:#FFF;
        color:${thema.colorPrimary};
        font-weight:bold;
    }
`;
