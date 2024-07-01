import Launch from "../Components/Launch"
const Upcoming = () => {
  return <Launch/>
}

export default Upcoming

//Thuis one is action kase nag babato ka ng data eh
export const pushedData = async({request,params})=>{
     
const datas = await request.formData();

const Datas = {
    date:datas.get('date'),
    mission:datas.get('mission'),
    rocket:datas.get('rocket'),
    destination:datas.get('destination')
}

const dataResponse = await fetch(`http://localhost:8000/data`,{
    method:'POST',
    body:JSON.stringify(Datas),
    headers:{
        'Content-Type':'application/json'
    }
})

const data = await dataResponse.json()

console.log(data)

return data;
}

//Eto loaders

export const getExoplanet = async() =>{
   
    const response = await fetch('http://localhost:8000/',{
        method:'get',
        headers:{
            'Content-Type':'application/json'
        }
    })
const data = await response.json();
if(!response){
    console.log('fail')
}
return data;

}