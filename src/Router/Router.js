import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Java} from '../Pages/Java/Java';
import {DataStructure} from '../Pages/DataStructure/DataStructure';
import { Welcome } from '../Pages/Welcome/Welcome';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Welcome /> } />
        <Route path="/java" element={<Java />} />
        <Route path="/data-structure" element={<DataStructure /> } />
      </Routes>
    </>
  )
}
