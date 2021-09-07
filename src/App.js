import {  useState, useCallback } from 'react';
import './App.css';
import Header from './components/layouts/header';
import AddItem from './components/views/addItem';
import ListItems from './components/views/listitems/listItems';
import Overview from './components/views/overview';

function App() {
  const [addedItem, setAddedItem] = useState({});
  const [overviewStats,setOverviewStats] = useState([]);
  
  const recalculate = useCallback(
    (overviewStats)=> {
      setOverviewStats(overviewStats)
    },
    [],
  )

  return (
    <div className="App">
      <Header></Header>
      <div className="d-flex justify-content-around row gx-5 p-5">
      <AddItem addedValue={(value) => {
            setAddedItem(value)
          }}></AddItem>
      <Overview overviewStats={overviewStats}></Overview>
      </div>
      <ListItems item={addedItem} setOverviewStats={recalculate}></ListItems>
    </div>
  );
}

export default App;
