import React , {useContext} from 'react'
import Third from './Third'
import { MyContext } from '../MyContext'

export default function Second() {
  const {increseCount} = useContext(MyContext)
  return (
    <div>
        <h1>Second Component</h1>
        <button onClick={increseCount}>Increase State</button>
        <Third />
    </div>

  )
}
