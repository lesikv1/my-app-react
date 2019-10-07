import React, { useContext } from 'react'
import Context from '../../utils/context'
import './index.css'

export default function Main() {
  const context = useContext(Context)

  console.log(context.state)

  if (!context.state.table) return null

  return (
    <div className='table'>
        <h1>Table</h1>
    </div>
  )
}