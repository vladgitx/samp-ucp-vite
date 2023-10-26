import React from "react"
import ReactDOM from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import "./index.css"

import Home from "./pages/page"
import Login, { loader as loginLoader, action as loginAction } from "./pages/login/page"
import Register, { loader as registerLoader } from "./pages/register/page"
import Dashboard, { loader as dashboardLoader } from "./pages/dashboard/page"
import HomeLayout from "./pages/layout"

const router = createBrowserRouter([
    {
        element: <HomeLayout/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
                loader: loginLoader,
                action: loginAction,
            },
            {
                path: "/register",
                element: <Register />,
                loader: registerLoader,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)