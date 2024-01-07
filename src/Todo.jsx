//ToDo
import React, { useState } from 'react'
import image from './image.png'
import todo from './todo.css'

const Todo = () => {

    let [inputData,setInputData]=useState('')
    let [item,setItem]=useState([])
    let [editIndex,setEditIndex]=useState(null);

    let addItem=()=>{
      if(!inputData)
      {}
      else if(editIndex!== null){
        item[editIndex]=inputData
        setEditIndex(null)
        setInputData("")
      }
      else{
        setItem([...item,inputData])
        setInputData("")
      } 
    }

    let deleteItem=(id)=>{
      console.log(id);
      let updateItem=item.filter((x,index)=>{
        return id!==index
      })
      setItem(updateItem);
    }
    
    let editItem=(id)=>{
        setInputData(item[id])
        setEditIndex(id)
    }
    let handelChange=(e)=>{
        setInputData(e.target.value)
    }
    let handelSubmit= (e)=>{
        e.preventDefault()
    }
    
    let clearAll=()=>{
      setItem([]);
    }
  
  return (
    <>
    
      <section>
        <article className='main' >
        <div className='mc1'> <img src={image} alt='img not found' className='img'/> </div>
        <div className='mc2'><p>ToDo APP</p></div>
        </article>
        <form onSubmit={handelSubmit} className='text-add'>
          <input type='text' value={inputData} name='inputData' onChange={handelChange} placeholder='Enter Item'/>
          <button onClick={addItem}> Add</button>
        </form>
        <article>
            {
              item.map((x,ind)=>{
                return(<div key={ind} className='item field'>
                <span >{ind+1}.{x}</span>
                <button onClick={()=>deleteItem(ind)}>Delete</button>
                <button onClick={()=>editItem(ind)}>Edit </button>
                </div>)
              })
            }
          
        </article>
        <article >
        <button onClick={clearAll}>Clear All</button>
        </article>
      </section>
    
    </>
  )
}

export default Todo



// import React from 'react'
// import TextLinkExample from './TextLinkExample'



// const Todo = () => {
//   return (
//     <>
//     <TextLinkExample/>
//     </>
//   )
// }

// export default Todo
