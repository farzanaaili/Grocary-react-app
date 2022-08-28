import ItemList from './ItemList'
const Container = ({items, handleCheck, handleDelete}) => {

 
  return(
    <main>
      {items.length ? (
          <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
          
      ):(
        <p style={{marginTop:"2rem"}}>Your list is empyty</p>
      )}
    </main>
  );

}
export default Container;