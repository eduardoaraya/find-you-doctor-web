import styled from 'styled-components';
import thema from '../../shared/thema';

export const Form = styled.form`
    height:auto;
    padding:45px 35px;
    position:relative;
    padding-bottom:105px;
    .fadeIn{
        margin-bottom:35px;
    }
    .separator{ 
      display:flex;
      @media(max-width:700px){
        flex-wrap:wrap;
      }
    }
   
    .btn-next{
        position:relative;
        left:0;
        bottom:0;
        flex-direction:row;
        justify-content:flex-start;
        button{
            margin:25px 0px;
            max-width:150px;
        }
    }
    .center{
        max-width:400px;
        margin:0 auto;
    }
    .link{
        color:${thema.colorPrimary};
        text-decoration:underline;
        cursor: pointer;
        font-weight:bold;
    }
    .group{
        small{
            color:tomato;
            margin:3px 0px;
            text-align:right;
        }
    }
`;

export const Label = styled.label`
    font-size:1em;
    font-weight:bold;
    color:#1a3d53;   
    margin:5px 0; 
`;
