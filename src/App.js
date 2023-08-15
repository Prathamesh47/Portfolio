import React from 'react';
import { createBrowserRouter,ReactProvider,Outlet } from 'react-router-dom';


import About from './components/About'; // Import the About component

import Contact from './components/Contact'; // Import the Contact component
import Footer from './components/Footer'; // Import the Footer component
import Navbar from './components/Navbar';
import Body from './components/Body';

const AppLayout=()=> {
  return (
  //  <Provider>
   <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
   
  );
}

const App = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      // {
      //   path:"/about",
      //   // id:"/about",
      //   element:<About/>
      // },
      {
        path:"/contact",
        element:<Contact/>,
     },
     {
      path:"/",
      element:<Body/>,
     }
    ]
  }
])

export default App;
