import { useEffect, useState } from "react";
import { getItems } from "../../../services/itemService";

const { default: ItemRow } = require("./itemRow");

const ListItems = ({item,setOverviewStats}) => {
  const [items, setItems] = useState([]);
   useEffect(() => {
    getItems().then((result) => {
      setItems(result.data.items);
      setOverviewStats(result.data.items)
    });
  }, [setOverviewStats]); 
  useEffect(()=> {
if(item) {
       setItems((prevItems) => [...prevItems, item])
       setOverviewStats((prevItems) => [...prevItems, item])
    }
  },[item, setOverviewStats])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Net</th>
            <th scope="col">Tax</th>
            <th scope="col">Gross</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item,index) => {
            return(<tr key={index}>
              <ItemRow item={item}></ItemRow>
            </tr>);
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ListItems;
