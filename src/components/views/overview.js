const Overview = ({overviewStats}) => {
    return (
        <div className="col-md-6"> 
<div className="card" >
  <div className="card-body">
    <h5 className="card-title">Overview</h5>
    <div className="w-75 m-auto">
        <div className="d-flex justify-content-between mt-3">
        <h6 className="card-subtitle mb-2 text-muted">Total sum</h6>
    <p className="card-text">{overviewStats.reduce((prev,value)=> parseFloat(prev) + parseFloat(value.net),0)} $</p>
        </div>

        <div className="d-flex justify-content-between mt-3">
    <h6 className="card-subtitle mb-2 text-muted">Average</h6>
    <p className="card-text">{((overviewStats.reduce((prev,value)=> parseFloat(prev) + parseFloat(value.net),0))/overviewStats.length).toFixed(2)} $</p>
    </div>

    <div className="d-flex justify-content-between mt-3">
    <h6 className="card-subtitle mb-2 text-muted align-self">Total items</h6>
    <p className="card-text">{overviewStats.length} </p>
    </div>
    </div>
  </div>
</div>
</div>
    );
  };
  export default Overview;