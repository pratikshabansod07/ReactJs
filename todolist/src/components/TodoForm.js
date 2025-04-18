import React from 'react';
import Button from './Button';


function TodoForm({handlesubmit , todo, setTodo, editId}) {
  return (
    <form className='todoForm' onSubmit={handlesubmit}>
                    <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    
                    {/* <button type='Submit'> {editId?"Edit":"Go"}</button> */}
                    <Button type='Submit' value={editId?"Edit":"Go"} />
                </form>
  )
}

export default TodoForm