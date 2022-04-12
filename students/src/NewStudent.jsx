import React from 'react'
import { Sidebar } from './components'
import { AddStudent } from './containers'

const NewStudent = () => {
  return (
    <div className='app__container'>
      <Sidebar/>
      <AddStudent/>
    </div>
  )
}

export default NewStudent
