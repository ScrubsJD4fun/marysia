import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Footer } from "./components"
import "./App.css"
import { getListFavorites } from "./api/fetchFilms"
import { queryClient } from "./api/queryClient"
import { lazy, Suspense } from "react"
import { Loader } from "./components/Loader"

const LazyMainPage = lazy(() => import("./pages/MainPage/MainPage"))
const LazyGenresPage = lazy(() => import("./pages/GenresPage/GenresPage"))
const LazyGenrePage = lazy(() => import("./pages/GenrePage/GenrePage"))
const LazyFilmPage = lazy(() => import("./pages/FilmPage/FilmPage"))
const LazyAccountPage = lazy(() => import("./pages/AccountPage/AccountPage"))

const App = () => {
  const me = getListFavorites()
  console.log(me)
  console.log(queryClient.getQueryData(["profile"]))

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<LazyMainPage />} />
            <Route path="/genres" element={<LazyGenresPage />} />
            <Route path="/genres/:genreName" element={<LazyGenrePage />} />
            <Route path="/films/:id" element={<LazyFilmPage />} />
            <Route path="/profile/:name" element={<LazyAccountPage />} />
          </Routes>

          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
