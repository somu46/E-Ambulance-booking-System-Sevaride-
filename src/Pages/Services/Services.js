import React from "react";
import "./Services.css";
import corporate from "../../Assets/CORPORATE 2.jpg";
import hospital from "../../Assets/hospital.jpg";
import govt from "../../Assets/goverment.jpg";
import airam from "../../Assets/airambulance.jpg";
import individual from "../../Assets/individuls_infoG.svg";
import Button from "../../components/Button/Button";
const Services = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-1 p-1  ">
        <div className="heading_services ">
          <h2>Book Emergency Ambulance Service with Best Facilities</h2>
          <p>
            Book Ambulance for different services in Hospitals,Corporate and
            Goverments.
          </p>
        </div>
        <div className="cards-container p-3 ">
          <div className="cards p-3  ">\

            <div className="card1 border-2 shadow-md mb-3 ">
              <img src={corporate} alt="Corporate " />
              <div class="card-body">
                <h5>Corporate</h5>
                <p>
                  Sevaride is working with different corporate for providing
                  ambulance.
                </p>
                <button className="m-1">
                  <Button title={"Know more"} />
                </button>
              </div>
            </div>
            <div className="card1 border-2 shadow-md mb-3 ">
              <img src={hospital} alt="Hospitals " />
              <div class="card-body">
                <h5>Hospitals</h5>
                <p>
                  Sevaride is working with different corporate for providing
                  ambulance.{" "}
                </p>
                <button className="m-1">
                  <Button title={"Know more"} />
                </button>
              </div>
            </div>
            <div className="card1 mt-5 border-2 shadow-md mb-3 ">
              <img src={govt} alt="Card1" />
              <div class="card-body">
                <h5>Goverments</h5>
                <p>
                  Sevaride is working with different corporate for providing
                  ambulance.{" "}
                </p>
                <button className="m-1">
                  <Button title={"Know more"} />
                </button>
              </div>
            </div>
            <div className="card1 border-2 shadow-md mt-3">
              <img src={airam} alt="Corporate" />
              <div class="card-body">
                <h5>Corporate</h5>
                <p>
                  Sevaride is working with different corporate for providing
                  ambulance.{" "}
                </p>
                <button className="m-1">
                  <Button title={"Know more"} />
                </button>
              </div>
            </div>
            <div className="card2 border-2 shadow-md mt-3 bg-red-100  p-3">
              <img  src={individual} alt="Card2" />
              <div className=" card2-body">
                <h5>Individual</h5>
                <p>
                  Sevaride also has a 24*7*365 days functional emergency
                  helpline number present across pan India, where people can
                  reach out to us for ambulances Support.{" "}
                </p>
                  <button className=" flex flex-wrap mt-3 w-[300px]">
                  <Button title={"Know more"} />
                  </button>
                  <button className=" flex flex-wrap  w-[250px]">
                  <Button title={"Helpline"} />
                  </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
