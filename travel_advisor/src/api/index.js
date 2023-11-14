import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



  export  const getPlaceData = async (sw, ne) => {
        try {
	        const { data: { data } } = await axios.get(URL, {
              params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
            },
                headers: {
              'X-RapidAPI-Key': 'f983c1e30amshadab7ca9f4140dfp1e024bjsnf53288859df0',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
               
            return data;
        } catch (error) {
	        console.error(error);
    }
}

