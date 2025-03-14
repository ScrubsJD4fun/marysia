/* eslint-disable react-hooks/exhaustive-deps */
import "./Header.css"
import { Link } from "react-router-dom"
import { queryClient } from "../../api/queryClient"
import { useQuery } from "@tanstack/react-query"
import { fetchProfile } from "../../api/fetchAuth"
import { useModal } from "../../hooks/useModal"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { SvgUser, SvgUserLogined } from "../../assets"

export const HeaderAccount = () => {
  const { isOpen, userIsLogined, firstLogin } = useModal()
  const isMobile = useMediaQuery({ maxWidth: 576 })
  const [x, setX] = useState("")

  const { isSuccess, isError, data } = useQuery(
    {
      queryFn: () => fetchProfile(),
      queryKey: ["profile"],
      retry: 1,
      retryDelay: 500,
    },
    queryClient,
  )

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["profile"] })
    console.log(isError, isSuccess, userIsLogined, firstLogin)
    setX(data?.name as string)
  }, [isSuccess, setX, userIsLogined, firstLogin])

  return (
    <>
      {isSuccess && (
        <Link to={`/profile/${x}`} className="header-nav__link">
          <button className="btn-reset header-btn">
            {x}
            {isMobile && <SvgUserLogined />}
          </button>
        </Link>
      )}
      {isError && (
        <button className="btn-reset header-btn" onClick={isOpen}>
          Войти{isMobile && <SvgUser />}
        </button>
      )}
    </>
  )
}
