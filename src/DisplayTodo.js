import React from 'react'

const DisplayTodo = (props) => {
    // const ondelete = (todo) => {
    //     console.log("Im this todo",todo)
    // }
    return (
        <div>
            {
                // console.log("Inreturn",responseData);
                props.responseData.map((todo=>{
                    return(
                        <div className="container mp-3" key={todo.id}>
                            <h5>{todo.title}</h5>
                            <button className="btn btn-outline-success" id={todo.id} onClick={()=>props.onstrike(todo)}>Done</button>
                            <button className="btn btn-outline-danger" onClick={()=>{props.ondelete(todo)}}>Remove</button>
                            <hr />
                        </div>
                    )
                }))
            }
        </div>
    )
}

export default DisplayTodo
