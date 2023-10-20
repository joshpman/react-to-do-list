import React from 'react';
import checkIcon from './check.png';
import deleteIcon from './delete.png';
const TodoItem = (props)=>{
    return(
      <li className='listItem'>
        {props.name}
        <div className="iconWrapper">
        <img className='checkItem'
            onClick={(e)=>e.target.parentNode.parentNode.style.textDecoration="line-through"}
            src={checkIcon}
            alt='Done'
        />
        <img className='deleteItem'
            onClick={(e)=>e.target.parentNode.parentNode.remove()}
            src={deleteIcon}
            alt='Delete'
        />
        </div>
      </li>
      
      
    )
}

export default TodoItem;