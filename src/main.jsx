import React from 'react';
import ReactDOM from 'react-dom/client';
import ListeProjets from './routes/ListeProjets';
import ErrorPage from './error-page';
import './index.css';
import Index from "./routes/index";
import Home from "./routes/Home";
import MeContacter from './routes/MeContacter';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root,
{
  loader as rootLoader,
  action as rootAction,
} from './routes/root';

import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";

import EditContact, {
  action as editAction,
} from "./routes/edit";

import {
  action as destroyAction
} from "./routes/destroy";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projets',
    element: <ListeProjets />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <MeContacter />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/projets',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);