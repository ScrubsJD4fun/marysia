import type { FC } from 'react'

export interface IHeaderInput {
    query: string
    setQuery: (e: any) => void
}

export const HeaderInput: FC<IHeaderInput> = ({query, setQuery}) => {
  return (
    <>
        <input
        className='search-input'
        type="search"
        placeholder={`Поиск`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
    </>
  )
}
