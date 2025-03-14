import { type FC } from "react"
import "./svg.css"

interface ValidSvg {
  validate: "black" | "red"
}

export const SvgPass: FC<ValidSvg> = ({ validate = "black" }) => {
  return (
    <svg
      className="svg-pass__pos"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z"
        fill={validate}
        fillOpacity="0.4"
      />
    </svg>
  )
}
