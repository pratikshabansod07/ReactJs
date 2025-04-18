import React, { useState } from 'react';
import './App.css';

function App() {

    // creating the state
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);

    // creating the handlesubmit function
    const handlesubmit = (e) => {
        e.preventDefault(); //it avoid the refreshing the page

        //this is for the editi or update the data 
        if(editId){
            const editTodo = todos.find((i)=>i.id===editId);

            const updatedTodos = todos.map((t)=>
            t.id===editTodo.id
              ? ( t = {id:t.id  , todo})
              :{id:t.id , todo:t.todo}
            );
            setTodos(updatedTodos);
            setEditId(0);
            setTodo("");
            return;

        }

        if (todo !== '') {
            setTodos([{ id: `${todo}-${Date.now}`, todo }, ...todos]);
            setTodo("");

        }
    };

    const handleDelete = (id)=>{

        const delTodo=todos.filter((to)=>to.id !== id);
        setTodos([...delTodo])

    };

    const handleEdit =(id)=>{

        const editTodo= todos.find((i)=>i.id===id);
        setTodo(editTodo.todo);
        setEditId(id);


    }

    return (
        <div className="App">
            {/* map function work as the for loop
            Simple array
             const arr = [1, 2, 3, 4, 5];
            {arr.map((num) => (
                    <div>{num} ,</div>
                ))} */}

            {/* filtered function it filter the value
             const arr = [1, 2, 3, 4, 5];
                { arr.filter((num)=>(
                        num!==3
                    ))
                } */}

            {/* get the value from array of object by using map function there 2 way to write the map function
               const arr = [
              {
                   id: 1,
                   name: 'a'
              },
             {
                    id: 2,
                    name: 'b'
                },
             ];        
               {
                    arr.map((num)=>(
                        <div key={num.id}>{num.name}</div>   
                    ))
                }
                {  arr.map((num)=>
                    {return(
                        <div key={num.id}>{num.name}</div>  
                    )
                    })
                }  */}

            <div className='container'>
                <h1>Todo List App</h1>
                {/* creating the form in this input box is there */}

                <form className='todoForm' onSubmit={handlesubmit}>
                    <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button type='Submit'> {editId?"Edit":"Go"}</button>
                </form>

                {/* creating the list */}
                <ul className='allToDos'>
                    {
                        todos.map((t) => (
                            <li className='singleTodo'>
                                <span className='todoText' key={t.id}>{t.todo}</span>
                                <button onClick={() => handleEdit(t.id)}>Edit</button>
                                <button onClick={()=>handleDelete(t.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );

};

export default App;
