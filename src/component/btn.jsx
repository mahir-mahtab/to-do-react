import React from 'react';

const Btn = ({ task, setTasklist, tasklist, index }) => {
  const handledel = () => {
    const newList = [...tasklist];
    newList.splice(index, 1);
    setTasklist(newList);
  };

  return (
    <div className='max-w-md p-4 border-2 border-slate-700 rounded-xl'>
      <div className='flex flex-col items-center justify-center gap-4 p-1'>
        <p className='font-bold text-center text-md'>{task}</p>
        <button className='p-1 text-white duration-300 bg-red-600 rounded hover:transform hover:scale-110 hover:opacity-100 opacity-85' onClick={handledel}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Btn;