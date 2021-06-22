import React, { useState } from 'react'
import Api from './Api';
import DisplayTodo from './DisplayTodo';

const Header = () => {
    const [responseData, setResponseData] = useState([]);
    const fetchedAPI = async (e) => {
        e.preventDefault();
        Api.get()
        .then((res)=>{
            // console.log(res.data);
            setResponseData(res.data);

        })
        // console.log(response.data)

    }
    const ondelete = (todo) => {
        console.log("Im this todo which gonna delete: ",todo);
        setResponseData(responseData.filter((e)=>{
            return e!==todo;
        }))
    }
    const onstrike = (todo) => {
        console.log("I'm todo which gona stikethrough",todo);
        // document.getElementById("todo.id").style.textDecoration = line-through;
        console.log(todo.id);
        var style = {textDecoration: 'line-through'};
        // setResponseData(responseData.filter((todo)=>{
        //     return ()
        // }))
        
    }
    return (
        <div className="container m-6">
            <button className="btn btn-primary" onClick={(e)=>{fetchedAPI(e)}}>Fetch</button><br />
            <div className="container my-3">
            <input type="text" placeholder="Add New Todo"/><button className="btn btn-warning">Add</button>
            </div>
            <div>
                <DisplayTodo responseData={responseData} ondelete={ondelete} onstrike={onstrike}/>
            </div>
            
        </div>
    )
}

export default Header
