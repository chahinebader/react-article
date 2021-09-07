import { useState } from "react";

const AddItem = ({addedValue}) => {
  const [addedItem, setAddedItem] = useState({name: "", net : 0,tax:16});
  //Call parent function to change the list of items
  const add = () => {
    if (addedItem.name && addedItem.net)
     { addedValue({...addedItem,tax: (addedItem.tax/100) *addedItem.net });
     setAddedItem({name: "", net : 0,tax:16})

    }
  }

    return (
      <div className="col-md-6">
        <form>
          <div>
        <div className="mb-3">
  <label htmlFor="name" className="form-label float-left">Name *</label>
  <input type="text" required className="form-control" value={addedItem.name} id="name" placeholder="john" onChange={(e)=> {setAddedItem({...addedItem, name : e.target.value}) }} />
    </div>
    <div className="mb-3">
  <label htmlFor="net" className="form-label float-left">Net *</label>
  <input type="number" required className="form-control" value={addedItem.net} id="net" placeholder="0" onChange={(e)=> {setAddedItem({...addedItem, net : e.target.value}) }}/>
    </div>
    </div>
    <div className="d-flex justify-content-end">
        <div className=" d-flex flex-column p-3">
            <span>Tax</span>
            <span>{addedItem.tax}%</span>
        </div>
        <div className="d-flex flex-column p-3">
            <span>Gross</span>
            <span>{((addedItem.tax/100) *addedItem.net).toFixed(2)} $</span>
        </div>
    </div>
    <div className="d-flex justify-content-center">
    <button type="submit" className="btn btn-lg btn-outline-success m-2" onClick={(e)=>{add()}}>Add</button>
    <button type="button" className="btn btn-lg btn-outline-secondary m-2" onClick={()=> {setAddedItem({name: "", net : 0,tax:16})}}>Reset</button>
    </div>
    </form>
      </div>
    );
  };
  export default AddItem;