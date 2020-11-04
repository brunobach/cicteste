import React from "react";

interface Props {
    variant: string;
}

const Outlined: React.FC<Props> = ({variant}) => {
  return (
    <svg
      width="210mm"
      height="297mm"
      version="1.1"
      viewBox="0 0 210 297"
      className={variant}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m1.8709 37.385c34.327 3.905 11.997 1.1075 28.002 3.4915 25.967 3.8681 39.848 13.045 48.962 30.855 3.4533 6.7478 16.98 34.742-8.7685 56.726-21.084 18.002-33.025 56.75-16.394 79.429 16.631 22.679 70.304 23.435 60.476 52.917-5.8727 17.618-45.172 12.596-75.13 17.734-22.046 3.7811-37.545 12.805-37.545 12.805z"
        fill="none"
        stroke="#b7c72c"
        stroke-width="1.765"
      />
    </svg>
  );
};

export default Outlined;
