import React from 'react'
import '../Styles/Layout.css'
import Sidebar from './sidebar'
const Laayout = ({ children }) => {
  return (
    <div>
        <div className="home">
<Sidebar/>
     <div className="homeContainer"> 
 
    
      <main>{children}</main>
      </div>
    </div>
    </div>
  )
}

export default Laayout
