import axios from 'axios';

  export  const getPlaceData = async (type, sw, ne) => {
        try {
	        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
              params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
            },
                headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
               
            return data;
        } catch (error) {
	        console.error(error);
    }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/30.438/-89.1028`, {
//       params: { lon: lng, lat: lat},
//       headers: {
//         'X-RapidAPI-Key': '74f9ff6c94mshdf28a8f2cca5206p1b01d1jsnac4f5b93fa2b',
//         'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//       }

//     })
//     console.log('here',data);
//     return data
//   } catch (error) {
//     console.error(error)
//   }
// }

