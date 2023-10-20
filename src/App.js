import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import TodoItem from './TodoItem';

const App = ()=>{
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const addItem = (itemName)=>{
       itemName.length>0 ? setItems(oldItems => [...oldItems, itemName]) : console.log("empty item");
       setSearchTerm('');
    }
    return(
        <div className='centerBox'>
            <h1 className='title'>To-do List</h1>
            <div className='search'>
                <input id="inputBox" 
                    placeholder='Add an item...'
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img className="searchIcon"
                    src={SearchIcon}
                    alt="Search"
                    onClick={()=>addItem(searchTerm)}
                />
            </div>
            <ul className="itemList">
                {items.map((items)=><TodoItem name={items} /> )}
            </ul>
        </div>
    )
}

export default App;


