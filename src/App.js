import { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");
  function addItem() {
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function editItem(id, newText) {
    const currentItem = items.filter((item) => item.id === id);

    const newItem = {
      id: currentItem.id,
      value: newText,
    };

    deleteItem(id);

    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }
  return (
    <>

      <div className="app">
        <h1 className='todo'>To do:</h1>
        <ul className='divi'>
          {items.map((item) => {
            return (
              <div >
                <li key={item.id} onClick={() => setShowEdit(item.id)}>
                  {item.value}
                  <button className="d-btn" onClick={() => deleteItem(item.id)}>
                    ❌
                  </button>
                </li>
              </div>
            );
          })}

        </ul>
       <input type="text" placeholder="What do you need to do?" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button className='btn1' onClick={() => addItem()}>Save item</button>
       </div>
    </>
  )
}

export default App;
