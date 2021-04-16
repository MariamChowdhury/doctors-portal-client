import React from "react";
import chair from "../../../images/chair.png";
import './HeaderMain.css'
const HeaderMain = () => {
  return (
    <main>
      <div style={{height:'600px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
          <h1 style={{color:'#3A4256'}}>
            Your new smile <br /> Starts here
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            recusandae minus earum molestiae, veniam laudantium.
          </p>
          <button className="btn btn-info">GET APPOINTMENT</button>
        </div>
        <div className="col-md-6">
          <img src={chair} className="img-fluid" alt="" />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
