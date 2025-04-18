import React from 'react';
import Button from './Button';

function TodoList({todos,handleEdit,handleDelete}) {
  return (
    <div>
        
        <ul className='allToDos'>
                    {
                        todos.map((t) => (
                            <li className='singleTodo'>
                                <span className='todoText' key={t.id}>{t.todo}</span>
                                
                                {/* <button onClick={() => handleEdit(t.id)}>Edit</button> */}
                                <Button  onClick={() => handleEdit(t.id)} value="Edit" />

                                {/* <button onClick={()=>handleDelete(t.id)}>Delete</button> */}
                                <Button onClick={()=>handleDelete(t.id)} value="Delete" />
                            </li>
                        ))
                    }
                </ul>

    </div>
  )
}

export default TodoList;