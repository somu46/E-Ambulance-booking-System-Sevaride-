




















import React, { useRef, useCallback, useState } from 'react';
import './booknow.css';
import { DirectionsRenderer, GoogleMap, useLoadScript, Autocomplete } from '@react-google-maps/api';
import { useNavigate } from 'react-router';

const libraries = ['places'];
const mapContainerStyle = {
    width: '900px',
    height: '500px',
};
const center = {
    lat: 22.5726,
    lng: 88.3639,
};
const centera = {
    lat: 22.6293280,
    lng: 88.4521199,
};

const BookNow = () => {

    const [pickUpLocation, setPickUpLocation] = useState("");
    const [dropOffLocation, setDropOffLocation] = useState("");
  const navigate=useNavigate();




    const [map, setmap] = useState(/**@type google.maps.Map*/(null));
    const [directionsResponses, setDirectionsResponses] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

  /** @type React.MutableRefObject<HTML.InputElement> */
  const originRef = useRef(null);
  /** @type React.MutableRefObject<HTML.InputElement> */
  const destinationRef = useRef(null);
    const handlePlaceChanged = useCallback((type) => {
        if (type === 'pickup') {
            const place = originRef.current.getPlace();
            if (place && place.formatted_address) {
                setPickUpLocation(place.formatted_address);
            }
        } else if (type === 'dropoff') {
            const place = destinationRef.current.getPlace();
            if (place && place.formatted_address) {
                setDropOffLocation(place.formatted_address);
            }
        }
    }, []);

    const calculateRoute = async () => {
        if (originRef.current && destinationRef.current) {
            const originPlace = originRef.current.getPlace();
            const destinationPlace = destinationRef.current.getPlace();

            if (!originPlace || !destinationPlace) {
                return;
            }

            const origin = originPlace.formatted_address;
            const destination = destinationPlace.formatted_address;

            try {
                 //eslint-disable-next-line no-undef
                const directionsService = new google.maps.DirectionsService();
                const results = await directionsService.route({
                    origin,
                    destination,
                     //eslint-disable-next-line no-undef
                    travelMode: google.maps.TravelMode.DRIVING,
                });

                setDirectionsResponses(results);
                setDistance(results.routes[0].legs[0].distance.text);
                setDuration(results.routes[0].legs[0].duration.text);
            } catch (error) {
                console.error("Error calculating route:", error);
            }
        }
    };

    const clearRoute = () => {
        setDirectionsResponses(null);
        setDistance('');
        setDuration('');
        if (originRef.current) originRef.current.value = '';
        if (destinationRef.current) destinationRef.current.value = '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const extractNumberFromDistance = (distance) => {
                        const match = distance.match(/([\d.]+)/);
                        return match ? parseFloat(match[0]) : 0;
                    };
                    const numericDistance = extractNumberFromDistance(distance);

        const data = {
            pickUpLocation,
            dropOffLocation,
            distance:numericDistance,
            duration,
        };
        try {
            // const response = await fetch('http://localhost:8080/api/bookNow', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // });

            // if (!response.ok) {
            //     const errorText = await response.text();
            //     throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            // }

            // const responseData = await response.json();

            // console.log("Data sent successfully! Response:", responseData);
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
        googleMapsApiKey: 'AIzaSyArLrFzhkdvcDGuESCEKQMGY-Ob9UoihNQ',
        libraries,
    });

    if (loadError) return <div>Error Loading Maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;

    return (
        <div className="home">
            <form className="searchbar" onSubmit={handleSubmit}>
                <p className="heading">Get a Ride</p>
                <Autocomplete
                    onLoad={(autocomplete) => {
                        originRef.current = autocomplete;
                    }}
                    onPlaceChanged={() => handlePlaceChanged('pickup')}
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
                        destinationRef.current = autocomplete;
                    }}
                    onPlaceChanged={() => handlePlaceChanged('dropoff')}
                >
                    <input
                        className="p-3"
                        type="text"
                        placeholder="Dropoff Location"
                        ref={destinationRef}
                    />
                </Autocomplete>
                <button type="button" onClick={calculateRoute}>Search</button>
                <button type="button" onClick={() => map.panTo(centera)}>Your Location</button>
                <button type="button" onClick={clearRoute}>Clear Route</button>

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
                    {directionsResponses && <DirectionsRenderer directions={directionsResponses} />}
                </GoogleMap>
            </div>
        </div>
    );
};

export default BookNow;
