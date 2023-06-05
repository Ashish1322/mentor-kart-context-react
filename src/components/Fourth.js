import React, {useContext} from 'react'
import { MyContext } from '../MyContext'

export default function Fourth() {

  const {count} = useContext(MyContext)

  return (
    <div>
    <h1>Fourth Component {count}</h1>
    </div>
  )
}
