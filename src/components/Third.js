import React, {useContext} from 'react'
import Fourth from './Fourth'
import { MyContext } from '../MyContext'
export default function Third() {

  const {decreseCount} = useContext(MyContext)

  return (
    <div>
        <h1>Third Component</h1>
        <button onClick={decreseCount}>Decreae Count</button>
        <Fourth />
    </div>
  )
}
