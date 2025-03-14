import type { FC } from "react"
import "./Layout.css"
import type { ILayoutProps } from "../../Interfaces/Auth"

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>
}
