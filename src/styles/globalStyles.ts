import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    *, button, input {
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    :root {
        --color-primary: #548cc6;
        --color-secondary: #f9f9f9;
        --color-tertiary: #f9f9f9;
        --color-description: #6e6e6e;
        --color-quaternary: #000;
        --color-blue: #0061ff;
        --color-border: #f2f2f2;
        --color-green: #b6c62c;
    }


    .informe {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-green);
        height: 1.8rem;
        position: relative;
        z-index: 800;
        box-shadow: 0px 4px 7px -5px rgba(0,0,0,0.75);
        span {
            color: white;
        }
        button {
            font-family: "Poppins", sans-serif;
            border: 0;
            margin-left: 10rem;
            padding: 0 20px;
            border-radius: 2px;
            color: var(--color-green);
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: 0.6s;
            background-color: white;
                &:hover {
                    border: 1px solid;
                }
        }
    
       
    }

    @media (max-width: 600px) {
    .informe {
      button, span{
          padding: 0;
          margin: 3px;
      }
    }
  }  
`;
