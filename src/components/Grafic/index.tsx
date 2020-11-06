import React from "react";

interface Props {
  variant: string;
}

const Grafic: React.FC<Props> = ({ variant }) => {
  return (
    <svg
      viewBox="0 0 242.6 206.04"
      xmlns="http://www.w3.org/2000/svg"
      className={variant}
    >
      <g
        transform="matrix(.69188 0 0 .68287 31.61 32.88)"
        fill="none"
        stroke="#a6ce39"
        stroke-width="27.798"
        data-name="Isolation Mode"
      >
        <ellipse
          cx="105.44"
          cy="102.56"
          rx="86.784"
          ry="86.832"
          fill="none"
          className="elipseVerde"
          stroke="#a6ce39"
          stroke-width="27.798"
        />
      </g>
      <g
        id="Isolation_Mode"
        transform="matrix(1.0038 0 0 1.0035 -.64063 .39663)"
        fill="none"
        data-name="Isolation Mode"
      >
        <ellipse
          cx="105.44"
          cy="102.56"
          rx="86.784"
          ry="86.832"
          className="elipseAzulClaro"
          stroke="#00b8f1"
          stroke-width="26.404"
        />
        <ellipse
          cx="105.69"
          cy="102.14"
          rx="36.026"
          ry="35.881"
          className="elipseAzulEscuro"
          stroke="#3069b3"
          stroke-width="19"
        />
      </g>
      <g transform="translate(-.788)" data-name="Layer 3">
        <path
          fill="#f9f9f9"
          transform="translate(-198.04,-3.5)"
          d="m350.21 106.61c0.0161 12.508-2.9915 21.611-14.379 33.139l-1.9393-2.0791-0.51-0.46-0.53-0.48-11.279-10.206c10.818-11.977 12.279-22.221 2.2407-38.062l10.908-9.8518 0.54-0.48 0.52-0.45 2.3352-2.2176c8.5195 8.8937 11.954 20.127 12.093 31.148z"
        />
        <path
          fill="#f9f9f9"
          transform="translate(-198.04,-3.5)"
          d="m373.66 106.63c0.0301 18.037-7.759 35.178-20.844 48.315l-4.1544-3.9447-0.72-0.65-0.78-0.7-8.4386-7.6814c17.994-19.131 19.111-48.681 2.2176-68.79l8.73-7.61 0.79-0.69 0.74-0.65 4.47-3.9c10.976 12.88 18.02 29.379 17.99 46.301z"
        />
        <path
          fill="#f9f9f9"
          transform="translate(-198.04,-3.5)"
          d="m405.3 106.28c0.0353 25.905-10.94 51.107-28.542 70.112l-19.895-17.774c24.725-30.879 28.893-67.09 2.0118-100.79l20.543-18.186c15.957 18.626 25.922 42.111 25.882 66.638z"
        />
      </g>
    </svg>
  );
};

export default Grafic;
