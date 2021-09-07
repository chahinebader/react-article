const ItemRow = ({ item }) => {
  return (
    <>
      <th scope="row">{item.name}</th>
      <td>{item.net}</td>
      <td>{item.tax}</td>
      <td>{((parseFloat(item.net) + parseFloat(item.tax)).toFixed(2))}</td>
    </>
  );
};
export default ItemRow;
