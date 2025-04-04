import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Layout from "./Layout.jsx";
import Home from "./component/home/Home.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
import User from "./component/User/User.jsx";
import Github from "./component/Github/Github.jsx";
import { githubInfoLoader } from "./component/Github/Github.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact-us",
        element: <Contact/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },
      {
        path: "github",
        element: <Github/>,
        loader: githubInfoLoader
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />}/>
//       <Route path='about' element={<About />}/>
//       <Route path='contact' element={<Contact />}/>
//     </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
