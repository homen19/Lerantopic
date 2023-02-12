import React from 'react'
import './SideNav.css';

import Item from "./data";

export const Sidenav = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col my-3 bg-success">
            <h3 className='text-light'>Learn Topics</h3>

          </div>
        </div>
        <div className="row">
          <div className="col" style={{color:"white"}}>

            {Item.map(d => (
              <div className='NavItems' key={d.id}>
                <p>{d.title}</p>
              </div>
            ))}




          </div>
        </div>
      </div>

    </>
  )
}
