// Layout.js

import React from 'react';
import Navbar from '../components/navbar';


const Layout = ({ children }) => {
  return (
    
     
    <header>
    
    <Navbar/>
      {children}
    </header>
  );
}

export default Layout;
