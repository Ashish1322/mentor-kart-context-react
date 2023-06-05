import { useState } from 'react';
import First from './components/First';
import { MyContext } from './MyContext';
import { MyContext2 } from './MyContext2';

function App() {
  const  [count,setCount] = useState(0)
    const increseCount = () => {
        setCount(count+1)
    }
    const decreseCount = () => {
        setCount(count-1)
    }

  return (
    <div className="App">

    <MyContext.Provider value={{count,increseCount,decreseCount}}>
      <First />
    </MyContext.Provider>



    </div>
  );
}

export default App;
