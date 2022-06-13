import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, apitestfunction,deleteTodo, removeTodo } from '../actions/index'


const Todo = () => {
  const [inputdata, setInputData] = useState('');
  const list = useSelector((state) => state.Todoreducer.list)
  const dispatch = useDispatch();
  return (
    <>
      <h5>To Do list</h5>
      <input type="text" placeholder='type some thing'
        value={inputdata}
        onChange={(e) => setInputData(e.target.value)} />
      <button type='submit' onClick={() => {
        dispatch(addTodo(inputdata),
          setInputData(''))
      }}>Add</button>


      {list.map((item) => {
        return (
          <div key={item.id}>
            <span><h6>{item.data} <span><button type='submit' onClick={() => {
              dispatch(apitestfunction(item.id))
            }}>delete</button></span></h6></span>
          </div>
        )

      }

      )}

    </>
  )
}
export default Todo;