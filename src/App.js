import './App.css'
import Header from './my-compo/Header';
import AddItem from './my-compo/AddItem';
import Container from './my-compo/Container';
import Footer from './my-compo/Footer';
import SearchItem from './my-compo/SearchItem';
import {useState, useEffect} from 'react'



function App() {
  

  const [items, setItems] =useState (JSON.parse(localStorage.getItem('shopinglist')) || []);
  const [newItem, setNewItem] = useState ('')
  const [search, setSearch] = useState('')

  useEffect(() =>{
    localStorage.setItem('shopinglist', JSON.stringify(items))
  },[items])

  const addItem = (item) => {
    const id =items.length ? items[items.length - 1].id + 1 :1 ;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
    
  }

  const handleCheck = (id) =>{
    const listItems =items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
    
  }


  const handleDelete = (id) =>{
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItem('shopinglist', JSON.stringify(listItems))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem(' ');
  }

  return (
    <div className="App" 
    style={{
      width:'80%',
      height:'auto',
      border:'1px solid navy',
      display:'block',
      margin:'0 auto'
    }}>

    <Header title="Grocery List" />
    <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
    />
     <SearchItem
      search={search}
      setSearch={setSearch}
    />
    <Container 
      items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()) )}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
    />
    <Footer length={items.length} />

    </div>
  );
}

export default App;
