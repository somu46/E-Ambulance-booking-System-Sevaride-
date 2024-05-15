import React, { useState } from "react";
import ambulancePic from "../../Assets/ambulance-pic.jpg";
import Button from "../../components/Button/Button";

const AmbulanceType = [
  {
    src: ambulancePic,
    type: "Normal Ambulance",
    Description: "Affordable, compact rides, without oxygen",
    price: 5960,
  },
  {
    src: "https://images.pexels.com/photos/8941920/pexels-photo-8941920.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Enhanced Ambulance",
    Description: "Includes basic life support features",
    price: 8500,
  },
  {
    src: "https://images.pexels.com/photos/7449065/pexels-photo-7449065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "Critical Care Ambulance",
    Description: "Fully equipped with advanced medical tools",
    price: 12000,
  },
];

const Card = ({ id, isSelected, onSelect, ambulance }) => {
  return (
    <div
      onClick={() => onSelect(isSelected ? null : id)}
      className={`flex flex-wrap flex-row p-1 min-h-[100px] m-1 ${
        isSelected
          ? "border-4 border-black cursor-pointer"
          : "hover:border-2 cursor-pointer hover:border-black"
      }`}
    >
      <div className="relative max-w-[30%] min-h-[100px] m-2 overflow-hidden items-center">
        <img
          className="relative max-h-[150px] w-full items-start p-2 "
          src={ambulance.src}
          alt={ambulance.type}
        />
      </div>
      <div className="max-w-[40%] p-1">
        <p className="text-black text-lg font-bold">{ambulance.type}</p>
        <p className="font-mono">
          <span>9 mins away</span> <span>9:30</span>
        </p>
        <p className="font-semibold">{ambulance.Description}</p>
      </div>
      <div className="flex items-center max-w-[30%] p-1 m-1 ml-auto">
        <p className="text-xl font-bold">${ambulance.price}</p>
      </div>
    </div>
  );
};

const Rides = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Cash"); // State to handle the payment method

  return (
    <div className="flex flex-wrap flex-col justify-items-center border-2 max-w-[500px] m-3 mb-0 p-1">
      <div className="flex flex-wrap flex-col items-center m-1 p-1">
        <p className="text-center font-semibold text-3xl">Choose a Ride</p>
        <p className="text-center font-semibold text-2xl m-1 p-1">
          Recommended <span>&#8628;</span>
        </p>
      </div>
      <div className="flex flex-wrap flex-col items-center m-3 p-1 min-h-[100px] border shadow-md rounded-md">
        {AmbulanceType.map((ambulance, index) => (
          <Card
            key={index}
            id={index}
            isSelected={selectedId === index}
            onSelect={setSelectedId}
            ambulance={ambulance}
          />
        ))}
      </div>
      <div className="flex flex-wrap flex-row justify-center  border m-1 px-5 py-3">
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="text-black px-4 py-2 rounded-md border-2 border-black mr-4 "
        >
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
        </select>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-700 ml-[4.75rem]">
          Request a Ride
        </button>
      </div>
    </div>
  );
};

const Ride = () => {
  const [divParts, setDivParts] = useState(2);

  const handleButtonClick = () => {
    setDivParts(3);
  };

  return (
    <div className="transition-all duration-1000 ease-in-out">
      <div style={{ display: "inline-block", width: `${90 / divParts}% ` }}>
        <div className="bg-blue-500 h-32 m-2">Part 1</div>
      </div>
      {divParts === 3 && (
        <div style={{ display: "inline-block", width: `${100 / divParts}%` }}>
          <Rides />
        </div>
      )}
      <div style={{ display: "inline-block", width: `${100 / divParts}%` }}>
        <div className="bg-green-500 h-32 m-2">Part 2</div>
      </div>

      <div className=" flex flex-wrap  justify-center items-center ">
     <button className="m-0 p-0" onClick={handleButtonClick}  >  <Button title={"Divide"} /> </button> 
      </div>

      {/* <button className="bg-gray-300 py-2 px-4 mt-4" onClick={handleButtonClick}>
        Divide
      </button> */}
    </div>
  );
};

export default Ride;
