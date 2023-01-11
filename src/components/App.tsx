import React from 'react';
import {
    createHashRouter as cRouter,
    RouterProvider
} from 'react-router-dom'

import { Page404 } from '../pages/404'
import { Index } from '../pages/Index'

const router = cRouter([
    {
        path: "/",
        element: <Index></Index>
    },
    {
        path: "*",
        element: <Page404></Page404>
    }
])

export function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    )
}