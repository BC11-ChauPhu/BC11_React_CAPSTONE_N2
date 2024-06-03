import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeTemplate from '../template/HomeTemplate'
import Home from '../pages/Home'

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
                }
                
            ]
        }
    ])
    return (
        myRoutes
    )
}

export default useCustomRoute