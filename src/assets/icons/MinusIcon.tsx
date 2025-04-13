import { forwardRef, SVGProps } from "react"

const MinusIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <circle cx="15" cy="15" r="15" fill="#FFCE7F" />
    <path d="M8 14H22V16H8V14Z" fill="white" />
  </svg>
));

export default MinusIcon
