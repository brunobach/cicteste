import styled from "styled-components";

export const ContainerCard = styled.div`
  margin: 15px;
  cursor: pointer;
  width: 20rem;
  height: 20rem;
  border: 3px solid;
  border-image-source: linear-gradient(
    70deg,
    var(--color-primary),
    var(--color-green)
  );
  border-image-slice: 1;
  
`;

export const Icon = styled.div`
margin: -30px 0 0 30px;
padding: 0.5rem;
width: 4rem;
height: 4rem;
background-color: var(--color-secondary);
z-index: 10;

`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    text-align: center;
    margin: 0 10px;
    color: var(--color-primary);
  }
  > p {
    margin: 20px 15px;
    text-align: left;
    line-height: 1.7rem;
    color: var(--color-description);
  }
`;
