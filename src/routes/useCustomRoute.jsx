import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeTemplate from '../template/HomeTemplate'
import Home from '../pages/Home'
import MovieDetail from '../pages/MovieDetail'

const useCustomRoute = () => {
    const myRoutes = useRoutes([
        {
            path: "",
            element: <HomeTemplate />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'home',
                    element: <Home/>
                },
                {
                    path: `/movie-detail/:id`,
                    element: <MovieDetail/>
                },
                {
                    path: '',
                    element: <Home/>
                }
                
                
            ]
        }
    ])
    return (
        myRoutes
    )
}

export default useCustomRoute