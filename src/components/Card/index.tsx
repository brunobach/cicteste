import React from "react";
import { ContainerCard, Icon, ContentCard } from "./styles";
import * as SvgIcons from "../../assets/icons";

interface Props {
  IconVariant:
    | "BalanceScale"
    | "Book"
    | "ChartLine"
    | "CloudMeatBall"
    | "ExclamationTriangle"
    | "FilePrescription"
    | "Landmark"
    | "LayerGroup"
    | "ProjectDiagram"
    | "ShieldAlt"
    | "SiteMap";
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ IconVariant, title, description }) => {
  const IconSvg = SvgIcons[IconVariant];

  return (
    <ContainerCard className="card-box">
      <Icon>
        <img src={IconSvg} alt="img" />
      </Icon>
      <ContentCard>
        <h2>{title}</h2>
        <p> {description} </p>
      </ContentCard>
    </ContainerCard>
  );
};

export default Card;
