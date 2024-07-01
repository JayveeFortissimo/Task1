import { useSubmit } from "react-router-dom"

const upcoming = ({data}) => {

    const Delete = async(id) =>{
        try{

            const response = await fetch(`http://localhost:8000/remove/${id}`,{
              method:'delete',
              headers:{
                'Content-Type':'application/json'
              }
            });
        
            const data = await response.json();
        
            if(data){
                alert('omcm')
                window.location.reload()
            }
        
            return data
        
          }catch(error){
            console.log(error)
          }
    }

  return (
   <section className="min-h-[80vh] flex justify-center items-center px-10 py-3">

<div className="min-h-[40vh] w-[50rem] border border-[aqua] text-[aqua] rounded  flex flex-col gap-6 px-4 py-3">
    
    <div>
         <h1>Upcomming missions both SpaceX launches and newly
            scheduled Zero to Mastery rockets.
         </h1>
    </div>

    <h1>Informations:</h1>


    <table>
        <thead>
            <tr>
                <th>No.</th>
                <th>Date</th>
                <th>Mission</th>
                <th>Rocket</th>
                <th>Destination</th>
            </tr>
        </thead>
        <tbody>
           
             {
    data.data.map(pro =>{
        return(
            <tr key={pro.id} className="text-center">
             <td>{pro.id}</td>
             <td>{pro.launch}</td>
             <td>{pro.mission}</td>
             <td>{pro.rocket}</td>
             <td>{pro.planet}</td>
             <td className="cursor-pointer text-red-700" onClick={()=>Delete(pro.id)}>X</td>
                </tr>
        )
    })
}

            
        </tbody>
    </table>


    </div>
   
 </section>
  )
}

export default upcoming