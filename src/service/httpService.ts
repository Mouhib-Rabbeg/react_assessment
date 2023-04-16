import http from '../config/apiconfig'
import { APIS } from '../config/endpoints'

const getLocations = (options:any) => {
    return http.get(APIS.LOCATIONS.GET_LOCATION,{
        params:{
           ...options
        }
    })
}




const LocationService = {
    getLocations
}

export default LocationService