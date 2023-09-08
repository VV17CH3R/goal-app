"use client"

import useDebounce from '@/lib/hooks/use-hooks';
import React, { useState } from 'react'

const NewGoalDialogPage = () => {

  const [goalName, setGoalName] = useState("");
  const debounceInput = useDebounce(goalName);

  return (
    <div>
      <input 
        type="text"
        value={goalName}
        onChange={(e)=>setGoalName(e.target.value)}
        placeholder='Цель...'
        className='p-3'
      />
      <button type="submit">Submit</button>
      <p className='text-white'>{debounceInput}</p>
    </div>
  )
}

export default NewGoalDialogPage