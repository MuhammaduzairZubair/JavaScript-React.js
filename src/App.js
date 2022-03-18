import { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App = ()=> {
  const [inputList, setInputList] = useState(" ");
  const [items, setItems] = useState([]);

 

  const itemEvent = (event) => {
    setInputList(event.target.value);

  }

  const listOfItems =() => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteItems = () => {
    console.log('delete')

    setItems((oldItems)=> {
      return oldItems.filter((arrEelemnt, index) => {
        return index !== id;
      })
    })
}

  return (
    
      <>
        <div className="main_div" >
        <div className="center_div">
          <br/>
          <h1>Hello Todo List</h1>

          <input type="text" placeholder="Title" value={inputList} onChange={itemEvent} /><br />
          <input type="text" placeholder="Description" onChange={itemEvent} />
          <br />
          <br />
          <button onClick={listOfItems} >Save Todo List</button>
                 
       <ol>
         {/* <li>{inputList}</li> */}
         {items.map((itemval, index) => {
           return < TodoList
           key = {index}
           id = {index}
           text = {itemval}
           onSelect={deleteItems} />;
         })}
       </ol>
        </div>
        </div>
       </>
      );
};

      export default App;
