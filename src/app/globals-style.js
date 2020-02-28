import { createGlobalStyle } from 'styled-components';

/* primary color ##1a3d53 */
/* secundary color ##e8ebed */
/* shadow #071218 */

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline:0;
    }
    html,body,#app{
        min-height: 100%;
        font-family: 'Roboto',Arial, Helvetica, sans-serif;
    }
    body{
        background: #e8ebed;
        -webkit-font-smoothing:antialiased !important;
    }
    a{
        text-decoration: none;
    }
    ul{
        padding:0;
    }
    body,input,button{
        color:#222;
    }
    button{
        cursor: pointer;
    }
    .container{
        max-width:1140px;
        margin:0 auto;
    }
    .group{
        padding:5px;
        display:flex;
        flex-direction:column;
        width:100%;
    }
    .fadeIn{
        animation: fade .5s forwards ease;
    }
    @keyframes fade {
        from {
            opacity:0;
        }
        to{
            opacity:1;
        }
    }
    
`;
