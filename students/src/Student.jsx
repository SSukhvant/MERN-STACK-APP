import React from 'react'
import { Sidebar } from './components'
import { Students } from './containers'

const Student = () => {
  return (
    <>
    <div className='app__container'>
      <Sidebar/>
      <Students/>
    </div>
    </>
  )
}

export default Student;
