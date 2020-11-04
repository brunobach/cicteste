import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 3rem;
`;

export const FormGroupSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input,
  textarea {
    width: 50%;
    height: 3rem;
    font-family: "Poppins", sans-serif;
    margin-top: 0.8rem;
    background: #fffa;
    border: 1px solid #eeee;
    outline: 0;
    padding: 0 1.6rem;
    font-size: 1.1rem;
    &:focus {
      content: "";
      background: #fafaf3;
      border: 2px solid;

      border-image-source: linear-gradient(
        70deg,
        var(--color-primary),
        var(--color-green)
      );
      border-image-slice: 1;
    }
    &:hover {
      border: 2px solid;
      border-image-source: linear-gradient(
        70deg,
        var(--color-primary),
        var(--color-green)
      );
      border-image-slice: 1;
    }
  }
  textarea {
    height: 7rem;
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem;
  }
  input:focus & :hover {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
  button {
    width: 20%;
    height: 2.5rem;
    background-color: var(--color-green);
    color: white;
    font-family: "Poppins", sans-serif;
    border: 0;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.6s;
    margin-top: 3.2rem;
    &:hover {
      border: 1px solid;
    }
  }
> span {
    margin: 3rem 0 8rem 0;
    color: var(--color-description);
    font-family:  sans-serif;

    font-size: 1.1rem;
}


@media (max-width: 600px){
  input,
  textarea  {
    width: 100%;
  }
}
`;
