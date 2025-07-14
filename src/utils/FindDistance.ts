import axios from 'axios';
import { GenericNameSpace } from '../interfaces';


export const findDistance = async (origin: string, destination: string): Promise<GenericNameSpace.IDistanceResponse> => {
  try {
    const url = `https://maps.googleapis.com/maps/api/directions/json?destination=${destination}&origin=${origin}&key=AIzaSyBJYygnGAhAWiwnrDSjFwGo3Bo5Re98lR4`;
  
    const { data } = await axios.get(url);
  
    const {distance, duration} = data?.routes[0]?.legs[0];
 
    return { distance, duration };
  } catch (error) {
    throw error
  }
};





