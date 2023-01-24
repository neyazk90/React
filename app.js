import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';

import Body from "./src/components/Body"
import Footer from "./src/components/Footer"
import Header from "./src/components/Header"
import About from "./src/components/pages/About";
import Contact from "./src/components/pages/Contact";
import Login from "./src/components/pages/Login";
import Register from "./src/components/pages/Register";
import RestaurantDetails from "./src/components/RestaurantDetail";
import Error from "./src/components/shared/Error";
import Profile from "./src/components/pages/Profile";

const AppLayout = () => {
    return (
        <>
            <Header />
                <div className="main">
                    <Outlet />
                </div>
            <Footer />
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile/>
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/restaurant/:restaurantId',
                element: <RestaurantDetails />
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={ appRouter }/>)