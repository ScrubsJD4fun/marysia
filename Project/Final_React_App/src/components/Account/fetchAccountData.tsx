import { useQuery } from "@tanstack/react-query"
import { fetchProfile } from "../../api/fetchAuth"
import { queryClient } from "../../api/queryClient"
import { Loader } from "../Loader"
import { Layout } from "../Layout"
import type { FC } from "react"
import "./Account.css"
import { AccountInfo } from "./AccountInfo"
import type { AccountTabs } from "../../Interfaces/Auth"
import { AccountFavorites } from "./AccountFavorites"

export const FetchAccountData: FC<AccountTabs> = ({ tab }) => {
  const meQuery = useQuery(
    {
      queryFn: () => fetchProfile(),
      queryKey: ["profile"],
    },
    queryClient,
  )

  switch (meQuery.status) {
    case "pending":
      return <Loader />

    case "error":
      return (
        <div>
          <span>Произошла ошибка</span>
          <button onClick={() => meQuery.refetch()}></button>
        </div>
      )

    case "success":
      return (
        <>
          {tab ? (
            <Layout>
              <AccountInfo accInfo={meQuery} />
            </Layout>
          ) : (
            <Layout>
              <AccountFavorites />
            </Layout>
          )}
        </>
      )
  }
}
