import { accomodationActions } from "./Accomodation-slice";
import {axiosInstance} from  "../../utils/axios";

export const createAccomodation =(accomodationData) => async (dispatch) =>{

try{
    dispatch(accomodationActions.getAccomodationRequest())
    const response = await axiosInstance.post("/v1/rent/user/newAccommodation", accomodationData);
    if(!response){
        throw new Error("Could not get any accomodation");
    }   
}
   catch(error)
   {
    dispatch(accomodationActions.getErrors(error.response.data.message))
}
}


export const getAllAccomodation =() => async(dispatch)=>{
    try{
       dispatch(accomodationActions.getAccomodationRequest());
       const{data} = await axiosInstance.get("/v1/rent/user/myAccommodation");
       const accom = data.data;
       dispatch(accomodationActions.getAccomodation(accom))
    }catch(error){
          dispatch(accomodationActions.getErrors(error.response.data.message))
    }
}