import { useState } from 'react'
import Btn from './component/btn'
import Input from './component/input'


function App() {
  const [tasklist, setTasklist]= useState([]);
  console.log(tasklist);
  

  return (
    < >
    <div className='flex flex-col items-center justify-center'>
       <h1 className='p-8 text-2xl font-bold text-center uppercase'>to do board</h1>
       <Input tasklist={tasklist} setTasklist={setTasklist}/>
       <div className='grid grid-cols-1 gap-4 p-6 md:grid-cols-3 md:p-12'>

        {tasklist.map((task, index) => (
          <Btn task={task} key={index} setTasklist={setTasklist} tasklist={tasklist} index={index}/>))}
        
       </div>
       </div>


    </>
  )
}

export default App
