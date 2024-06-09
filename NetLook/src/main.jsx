import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from './components/AuthLayout.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: (<AuthLayout authentication={false}><Login/></AuthLayout>)  },
      { path: '/add-post', element: (<AuthLayout><AddPost /></AuthLayout>) },
      { path: '/edit-post/:id', element: (<AuthLayout><EditPost /></AuthLayout>)},
      { path: '/post/:slug', element: <Post />},
    ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </>,
)
