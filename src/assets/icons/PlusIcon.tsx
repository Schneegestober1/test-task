import { forwardRef, SVGProps } from "react";

const PlusIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <circle cx="15.2056" cy="15" r="15" fill="#FFCE7F" />
    <path
      d="M14.2056 14V8H16.2056V14H22.2056V16H16.2056V22H14.2056V16H8.20557V14H14.2056Z"
      fill="white"
    />
  </svg>
));

export default PlusIcon;
