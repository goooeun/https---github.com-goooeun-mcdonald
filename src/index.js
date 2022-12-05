import { OrderProvider } from 'contexts/OrderContext';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import ErrorPage from 'routes/errorPage';
import Main from 'routes/main';
import Menu from 'routes/menu';
import MenuDetail from 'routes/menuDetail';
import Order from 'routes/order';
import Root from 'routes/root';
import Store from 'routes/store';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Main /> },
            {
                path: 'menu',
                element: <Menu />,
            },
            {
                errorElement: <ErrorPage />,
                path: 'menu/:id',
                element: <MenuDetail />,
            },
            {
                path: 'store',
                element: <Store />,
            },
            {
                path: 'order',
                element: <Order />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
