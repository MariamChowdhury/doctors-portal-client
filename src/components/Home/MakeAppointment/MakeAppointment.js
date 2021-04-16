import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../images/5790-removebg.png";
const MakeAppointment = () => {
  return (
    <section className="">
      <div className="d-flex justify-content-center ">
        <div className="row w-75 section-container  ">
          <div className="col-md-5">
            <img src={doctor} alt="" className="img-fluid" />
          </div>
          <div className="col-md-7 mt-5 pt-2">
            <h5 className="text-info my-4 ">Appointment</h5>
            <h2 className="text-white my-2 ">
              Make an appointment <br />
              Today
            </h2>
            <p className="text-white my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor ullam sapiente minima quae mollitia dicta quibusdam inventore cumque voluptates!
            </p>
            <button className=" my-4 btn btn-info text-white">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
