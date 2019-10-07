import React, { useContext, useState } from 'react'
import Context from '../../utils/context'
import './index.css'

export default function Main() {
  const context = useContext(Context)
  const [arrCell, setArrCell] = useState([])

  if (!context.state.table) return null

  let { m, n} = context.state


  for (let i = 0; i < n; i++) {
    let stringArr = []
    for (let j = 0; j < m; j++) {
      stringArr[j] = 0
    }
    arrCell.push(stringArr)
  }

  const addValue = (n, m) => {
    arrCell[n][m] += 1
    setArrCell(arrCell)
    // console.log(n, 'n')
    // console.log(m, 'm')
    // console.log(arrCell[n][m])
  }

  console.log(arrCell)

  return (
    <div className='table'>
        <h1>Table</h1>
        {arrCell.map((arrString, indexN) => {
          return (
            <div className='string'>
              {arrString.map((cell, indexM) => {
                return (
                  <div className='cell' onClick={() => addValue(indexN, indexM)}>
                    <p>
                      {arrCell[indexN][indexM]}
                    </p>
                  </div>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}