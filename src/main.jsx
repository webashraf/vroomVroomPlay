import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './routes/routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
<div style={{maxWidth: "1280px"}} className='mx-auto w-full'>
<AuthProvider>
    <RouterProvider router={routes}>
    </RouterProvider>
  </AuthProvider>
</div>,
)
