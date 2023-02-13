import React from 'react'
import './SideNav.css';
import { Link } from 'react-router-dom';

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
              <p><Link className='l1' to={d.path}>{d.title}</Link></p>
               
              </div>
            ))}




          </div>
        </div>
      </div>

    </>
  )
}
