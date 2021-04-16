import React from "react";
import img01 from "../../../images/Ellipse 1.png";
import img02 from "../../../images/Ellipse 2.png";
import img03 from "../../../images/Ellipse 3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      img: img01,
      name: "Winson Harry",
      place: "Florida",
    },
    {
      img: img02,
      name: "Winson Harry",
      place: "Florida",
    },
    {
      img: img03,
      name: "Winson Harry",
      place: "Florida",
    },
  ];
  return (
    <div className="container w-75 my-5">
      <div className="my-5">
        <h4 className="text-info">Testimonials</h4>
        <h2>
          What out patients <br /> Says
        </h2>
      </div>
      <div className="row my-5 mx-2">
        {testimonials.map((data) => (
          <TestimonialCard data={data}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
