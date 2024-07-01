import Upcomings from "../Components/upcoming";
import { useLoaderData } from "react-router-dom";

const UpsComing = () => {
  const datx = useLoaderData('info');

  return <Upcomings data={datx}/>
}

export default UpsComing


export const getInfo = async()=>{
  try{
    const response = await fetch(`http://localhost:8000/info`,{
      method:'get',
      headers:{
        'Content-Type':'application/json'
      }
    });
   const data = await response.json();

   return data;

  }catch(error){
    console.log(error)
  }
}


