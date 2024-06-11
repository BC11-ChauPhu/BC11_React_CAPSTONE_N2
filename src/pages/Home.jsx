import React from 'react'
import MovieBanner from '../components/MovieBanner'
import ShowingMovies from '../components/ShowingMovies'
import ComingSoon from '../components/ComingSoon'
import Cinemas from '../components/Cinemas'
const Home = () => {
  return (
    <>
      <MovieBanner/>
      <ShowingMovies/>
      <ComingSoon/>
      <Cinemas/>
    </>
  )
}

export default Home