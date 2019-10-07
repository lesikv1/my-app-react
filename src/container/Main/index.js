import React from 'react'
import Setting from '../Setting'
import Table from '../Table'
import './index.css'

export default function Main() {
  return (
    <div className='main'>
        <Setting className='header'/>
        <Table />
    </div>
  )
}