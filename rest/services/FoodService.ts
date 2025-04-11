import Food from "@/models/Food";
import axios from "axios";

const url = "http://localhost:5000/food/";

export const GetFood = async():Promise<Food[]> => {
   const response = await axios.get(url)
   return response.data
}

export const GetFoodById = async(id:string):Promise<Food> =>{
    const response = await axios.get(url+id)
    return response.data
}