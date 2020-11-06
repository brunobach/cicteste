import styled from "styled-components";

export const ContainerCard = styled.div`
  margin: 30px 15px 15px 30px;
  cursor: pointer;
  width: 20rem;
  height: 20rem;
  border: 3px solid;
  border-image-source: linear-gradient(
    70deg,
    var(--color-primary),
    var(--color-green-light)
  );
  border-image-slice: 1;
  
`;

export const Icon = styled.div`
margin: -30px 0 0 30px;
background-color: var(--color-secondary);
width: 3.5rem;
> img {
  margin: 0px 0.5rem;
  width: 42px;
  height: auto;
  z-index: 300;
}

`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    text-align: center;
    margin: 0 10px;
    color: #379ed4;
  }
  > p {
    margin: 20px 15px;
    text-align: left;
    line-height: 1.7rem;
    color: var(--color-description);
  }
`;
