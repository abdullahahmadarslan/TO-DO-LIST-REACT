import React, { useState } from 'react';
import List from './List';
import AddIcon from '@mui/icons-material/Add';

function App() {
  // creating state Hooks:
  const [itemText, setItemText] = useState("");
  const [itemsArray, setItemsArray] = useState([]);

  // 
  const itemTextHandler = (eventObject) => {
    setItemText(eventObject.target.value);
  }

  const addButtonHandler = () => {
    setItemsArray((previousItemsArray) => {
      return [...previousItemsArray, itemText];
    });
    setItemText("");
  }

  const delButtonHandler = (key) => {
    setItemsArray((previousItemsArray) => {
      return previousItemsArray.filter((currentArrayItem, currentArrayItemIndex) => {
        return currentArrayItemIndex !== key;
      });
    });
  }

  return (
    // creating main div first in which app would be placed
    <div className="app-div">
      {/* creating heading  */}
      <div className="heading">
        <h1>ToDo List</h1>
      </div>
      {/* creating to do list portion */}
      <div className="todo-list">
        <div className="input-plus-addbtn">
          {/* creating an input field now */}
          <input type="text" className="search-bar cmn" placeholder='   Add Items Here...' value={itemText} onChange={itemTextHandler} />
          <button className="add-btn cmn" onClick={addButtonHandler}>
            <AddIcon style={{ color: "white" }} />
          </button>
        </div>
        {/* creating list  */}
        <ul className='list'>
          {itemsArray.map((value, index) => (
            <List key={index} id={index} currentItemValue={value} delButtonHandler={delButtonHandler} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
