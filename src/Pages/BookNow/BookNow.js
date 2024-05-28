import React, { useRef } from 'react'
import { useState } from 'react';
import './booknow.css';
import {DirectionsRenderer, GoogleMap, useLoadScript} from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';

// import { faL } from '@fortawesome/free-solid-svg-icons';



const libraries=['places'];
const mapContainerStyle={
    width:'900px',
    height:'500px',
};
const center= {
    lat:22.5726,
    lng: 88.3639,
};
const centera= {
    lat:22.6293280,
    lng: 88.4521199,
};
function BookNow() {
    const {isLoaded,loadError}=useLoadScript({
        googleMapsApiKey:'AIzaSyArLrFzhkdvcDGuESCEKQMGY-Ob9UoihNQ',
        libraries,
    });
const [map, setmap] = useState(/**@type google.maps.Map*/(null))
const [directionsResponses, setdirectionsResponses] = useState(null)
const [distance, setdistance] = useState('')
const [duration, setduration] = useState('')

/** @type React.MutableRefObject<HTML.InputElement> */
const originRef=useRef()
/** @type React.MutableRefObject<HTML.InputElement> */
const destinationRef=useRef()

    if(loadError)
    {
        return <div>Error Loading Maps</div>;
    }
    if(!isLoaded)
    {
        return <div>Loading Maps</div>
    }
    /**DIRECTION ROUTE */
    
    async function calculateroute(){
        if(originRef.current.value ===''|| destinationRef.current.value ===''){
            return
        }
        //eslint-disable-next-line no-undef
        const directionService= new google.maps.DirectionsService()
        const results = await directionService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            //eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING
        })
        setdirectionsResponses(results)
        setdistance(results.routes[0].legs[0].distance.text)
        setduration(results.routes[0].legs[0].duration.text)
    }
    function clearRoute(){
        setdirectionsResponses(null)
        setdistance('')
        setduration('')
        originRef.current.value=''
        destinationRef.current.value=''
    }


  return (
    <div className="home">
       <div className="searchbar">
            <p className="heading">Get a Ride</p>
           <Autocomplete>
                <input className=" p-3" type="text" placeholder="Pickup Location" ref={originRef}></input>
           </Autocomplete>

           <Autocomplete>
                <input  className=" p-3" type="text" placeholder="Dropoff Location" ref={destinationRef}></input>
           </Autocomplete>
           <button type="button" onClick={calculateroute}>Search</button>
           <button type="button" onClick={()=>map.panTo(centera)}>Your Location</button>
           <button type="button" onClick={clearRoute}>Clear Route</button>
      

           <p className="dis_dur">Distance:  {distance} </p>
           <p className="dis_dur">Duration:  {duration}</p>

       </div>
       <div className="map">

            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
               options={{
                zoomControl:true,
                fullscreenControl:false,
                mapTypeControl:false,
               }}
                onLoad={(map)=>setmap(map)}
            >
                {directionsResponses && <DirectionsRenderer directions={directionsResponses}/>}
            </GoogleMap>
       </div>
    </div>
  )
}

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
