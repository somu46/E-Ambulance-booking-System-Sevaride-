import React, { useRef, useCallback, useState } from "react";
import "./booknow.css";
import {
  DirectionsRenderer,
  GoogleMap,
  useLoadScript,
  Autocomplete,
} from "@react-google-maps/api";
// import { useEffect } from "react";
import { useNavigate } from "react-router";

const libraries = ["places"];
const mapContainerStyle = {
  width: "900px",
  height: "500px",
};
const center = {
  lat: 22.5726,
  lng: 88.3639,
};
const centera = {
  lat: 22.629328,
  lng: 88.4521199,
};

const BookNow = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");

  const navigate = useNavigate();

  const [map, setmap] = useState(/**@type google.maps.Map*/ (null));
  const [directionsResponses, setDirectionsResponses] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTML.InputElement> */
  const originRef = useRef(null);
  /** @type React.MutableRefObject<HTML.InputElement> */
  const destinationRef = useRef(null);

  const handlePlaceChanged = useCallback((type) => {
    if (type === "pickup") {
      const place = originRef.current.getPlace();
      console.log("Pickup place details:", place); // Debug log to check place details
      if (place && place.formatted_address) {
        setPickUpLocation(place.formatted_address);
      } else {
        // console.error("Pickup place is not defined or does not have a formatted address"); // Error log
      }
    } else if (type === "dropoff") {
      const place = destinationRef.current.getPlace();
      console.log("Dropoff place details:", place); // Debug log to check place details
      if (place && place.formatted_address) {
        setDropOffLocation(place.formatted_address);
      } else {
        // console.error("Dropoff place is not defined or does not have a formatted address"); // Error log
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Pickup Location:", pickUpLocation);
    // console.log("Dropoff Location:", dropOffLocation);

    const extractNumberFromDistance = (distance) => {
      const match = distance.match(/([\d.]+)/);
      return match ? parseFloat(match[0]) : 0;
    };
    const numericDistance = extractNumberFromDistance(distance);

    const data = {
      pickUpLocation: pickUpLocation,
      dropOffLocation: dropOffLocation,
      distance: numericDistance,
    };
    // console.log( typeof data.distance)

    try {
    //   const response = await fetch("http://localhost:8080/api/bookNow", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     const errorText = await response.text(); // Get detailed error message from server
    //     throw new Error(
    //       `HTTP error! status: ${response.status}, message: ${errorText}`
    //     );
    //   }

    //   const responseData = await response.json();
    
    //   console.log("Data sent successfully! Response:", responseData);

      if (true) {
        setTimeout(() => {
          navigate("/ride",{state:data});
        }, 1000);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyArLrFzhkdvcDGuESCEKQMGY-Ob9UoihNQ", // Replace with your API key
    libraries,
  });

  if (loadError) return <div>Error Loading Maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  const calculateRoute = async () => {
    if (originRef.current && destinationRef.current) {
      const originPlace = originRef.current.getPlace();
      const destinationPlace = destinationRef.current.getPlace();

      if (!originPlace || !destinationPlace) {
        // console.error("Origin or destination place is not defined"); // Error log
        return;
      }

      const origin = originPlace.formatted_address;
      const destination = destinationPlace.formatted_address;

      if (!origin || !destination) {
        // console.error("Origin or destination is empty"); // Error log
        return;
      }

      // console.log("Calculating route from", origin, "to", destination); // Debug log

      try {
        //eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
          origin,
          destination,
          //eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING,
        });

        // console.log("Directions results:", results); // Debug log

        setDirectionsResponses(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text);
      } catch (error) {
        // console.error("Error calculating route:", error); // Error log
      }
    } else {
      // console.error("Origin or destination reference is null"); // Error log
    }
  };

  const clearRoute = () => {
    setDirectionsResponses(null);
    setDistance("");
    setDuration("");
    if (originRef.current) originRef.current.value = "";
    if (destinationRef.current) destinationRef.current.value = "";
  };

  return (
    <div className="home">
      <form className="searchbar" onSubmit={handleSubmit}>
        <p className="heading">Get a Ride</p>
        <Autocomplete
          onLoad={(autocomplete) => {
            // console.log("Pickup Autocomplete initialized", autocomplete); // Debug log
            originRef.current = autocomplete;
          }}
          onPlaceChanged={() => handlePlaceChanged("pickup")}
        >
          <input
            className="p-3"
            type="text"
            placeholder="Pickup Location"
            ref={originRef}
          />
        </Autocomplete>

        <Autocomplete
          onLoad={(autocomplete) => {
            // console.log("Dropoff Autocomplete initialized", autocomplete); // Debug log
            destinationRef.current = autocomplete;
          }}
          onPlaceChanged={() => handlePlaceChanged("dropoff")}
        >
          <input
            className="p-3"
            type="text"
            placeholder="Dropoff Location"
            ref={destinationRef}
          />
        </Autocomplete>
        <button type="button" onClick={calculateRoute}>
          Search
        </button>
        <button type="button" onClick={() => map.panTo(centera)}>
          Your Location
        </button>
        <button type="button" onClick={clearRoute}>
          Clear Route
        </button>

        <p className="dis_dur">Distance: {distance}</p>
        <p className="dis_dur">Duration: {duration}</p>

        <button type="submit">Route</button>
      </form>
      <div className="map">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          options={{
            zoomControl: true,
            fullscreenControl: false,
            mapTypeControl: false,
          }}
          onLoad={(map) => setmap(map)}
        >
          {directionsResponses && (
            <DirectionsRenderer directions={directionsResponses} />
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default BookNow;

// import React, { useRef,useCallback } from 'react'
// import { useState } from 'react';
// import './booknow.css';
// import {DirectionsRenderer, GoogleMap, useLoadScript} from '@react-google-maps/api';
// import { Autocomplete } from '@react-google-maps/api';

// // import { faL } from '@fortawesome/free-solid-svg-icons';

// const libraries=['places'];
// const mapContainerStyle={
//     width:'900px',
//     height:'500px',
// };
// const center= {
//     lat:22.5726,
//     lng: 88.3639,
// };
// const centera= {
//     lat:22.6293280,
//     lng: 88.4521199,
// };
// const BookNow=()=>{

//     const [pickUpLocation,setPickUpLocation]=useState("");
//     const [dropOffLocation,setDropOffLocation]=useState("");

//     const handlePlaceChanged = useCallback((type) => {
//         if (type === 'pickup') {
//           const place = originRef.current.getPlace();
//           setPickUpLocation(place.formatted_address || place.name);
//         } else if (type === 'dropoff') {
//           const place = destinationRef.current.getPlace();
//           setDropOffLocation(place.formatted_address || place.name);
//         }
//       }, []);

//     const  handleSubmit =(e)=>{
//         e.preventDefault();
//         console.log("Pickup Location:", pickUpLocation);
//         console.log("Dropoff Location:", dropOffLocation);
//     }

//     const {isLoaded,loadError}=useLoadScript({
//         googleMapsApiKey:'AIzaSyArLrFzhkdvcDGuESCEKQMGY-Ob9UoihNQ',
//         libraries,
//     });

// const [map, setmap] = useState(/**@type google.maps.Map*/(null))
// const [directionsResponses, setdirectionsResponses] = useState(null)
// const [distance, setdistance] = useState('')
// const [duration, setduration] = useState('')

// /** @type React.MutableRefObject<HTML.InputElement> */
// const originRef=useRef()
// /** @type React.MutableRefObject<HTML.InputElement> */
// const destinationRef=useRef()

//     if(loadError)
//     {
//         return <div>Error Loading Maps</div>;
//     }
//     if(!isLoaded)
//     {
//         return <div>Loading Maps</div>
//     }
//     /**DIRECTION ROUTE */

//     async function calculateroute(){
//         if(originRef.current.value ===''|| destinationRef.current.value ===''){
//             return
//         }
//         /eslint-disable-next-line no-undef/
//         const directionService= new google.maps.DirectionsService()
//         const results = await directionService.route({
//             origin: originRef.current.value,
//             destination: destinationRef.current.value,
//             //eslint-disable-next-line no-undef
//             travelMode: google.maps.TravelMode.DRIVING
//         })
//         setdirectionsResponses(results)
//         setdistance(results.routes[0].legs[0].distance.text)
//         setduration(results.routes[0].legs[0].duration.text)
//     }
//     function clearRoute(){
//         setdirectionsResponses(null)
//         setdistance('')
//         setduration('')
//         originRef.current.value=''
//         destinationRef.current.value=''
//     }

//   return (
//     <div className="home">
//        <form className="searchbar" onSubmit={handleSubmit}>
//             <p className="heading">Get a Ride</p>
//            <Autocomplete
//               onLoad={(autocomplete) => (originRef.current = autocomplete)}
//               onPlaceChanged={() => handlePlaceChanged('pickup')}
//            >
//                 <input className=" p-3" type="text" placeholder="Pickup Location" ref={originRef}

//                 ></input>
//            </Autocomplete>

//            <Autocomplete
//           onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
//           onPlaceChanged={() => handlePlaceChanged('dropoff')}
//           >
//                 <input  className=" p-3" type="text" placeholder="Dropoff Location" ref={destinationRef}
//                 ></input>
//            </Autocomplete>
//            <button type="button" onClick={calculateroute}>Search</button>
//            <button type="button" onClick={()=>map.panTo(centera)}>Your Location</button>
//            <button type="button" onClick={clearRoute}>Clear Route</button>

//            <p className="dis_dur">Distance:  {distance} </p>
//            <p className="dis_dur">Duration:  {duration}</p>

//            <button type="submit" > Route</button>

//        </form>
//        <div className="map">

//             <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 zoom={10}
//                 center={center}
//                options={{
//                 zoomControl:true,
//                 fullscreenControl:false,
//                 mapTypeControl:false,
//                }}
//                 onLoad={(map)=>setmap(map)}
//             >
//                 {directionsResponses && <DirectionsRenderer directions={directionsResponses}/>}
//             </GoogleMap>
//        </div>
//     </div>
//   )
// }

// export default BookNow;
