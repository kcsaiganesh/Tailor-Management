import React from 'react'
import MeasurementForm from './measurements';
const order = () => {


  return (
    <div>
      <MeasurementForm/>
    <div class="max-w-sm  rounded  h-auto  w-48 ml-2 shadow-md shadow-purple-300 absolute overflow-auto top-48 left-0  drop-shadow-lg">
      <div className= " flex flex-col align-center    rounded-md   ">
          <label class="m-3 font-semibold text-purple-700">Top
        <select id ="top" className='w-auto shadow-sm mr-6  overflow-hidden text-gray-500 shadow-purple-300 outline-purple-400 rounded-md h-auto '>
          <option className="text-center rounded-sm " value="top">top</option> 
          <option className="text-center " value="full sleve shirt">full sleeve shirt</option>
          <option className="text-center " value="half sleve shirt">half sleeve shirt</option> 
          <option className="text-center " value="T shirt">T shirt</option> 
        </select>
        </label>
        <label className="m-3 font-semibold text-purple-700">bottom
        <select id ="top" className='w-auto shadow-sm m-auto overflow-hidden text-gray-500 shadow-purple-300 outline-purple-400 rounded-md h-auto '>
          <option className="text-center " value="top">top</option> 
          <option className="text-center " value="full sleve shirt">full sleeve shirt</option>
          <option className="text-center " value="half sleve shirt">half sleeve shirt</option> 
          <option className="text-center " value="T shirt">T shirt</option> 
        </select>
        </label>
      </div>
      
      
    </div>
    </div>
  )
}

export default order
