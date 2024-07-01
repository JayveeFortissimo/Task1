import { Form,useRouteLoaderData,useNavigation } from "react-router-dom"
import { useContext } from "react";
import creation from "../Context/Creation.js";

const Launch = () => {
const {setChoose,choose} = useContext(creation)
const exoplanets = useRouteLoaderData('exoplanet');

const submitting = useNavigation()
const subs = submitting.state === 'submitting'

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-6 py-3">
    <div className="min-h-[40vh] w-[50rem] border border-[aqua] text-[aqua] rounded px-4 py-2 flex flex-col gap-6">
      <p>Schedule a mission launch for insterstellar travel
        to one of the Kepler Exploranets.
      </p>

     <p>Only confirmed planets matching the following criteria are available for 
        the earliest schedule missions:
     </p>

        <div>
            <li>Planetary radius less than 1.6 times Earth's radius</li>
            <li>Effective stellar flux greater than 0.36 times
                Earth's value and less than 1.11 times Earths value
            </li>
        </div>

        <div>
            <Form  method="post"  className="flex flex-col gap-3">
                <div className="flex gap-10">
                    <label htmlFor="Launch Date">Launch Date</label>
                     <input type="date" name="date" className="border c1 px-2"/>
                </div>

                <div className="flex gap-10">
                    <label htmlFor="Mission Name">Mission Name</label>
                     <input type="text" name="mission" className="border c1 px-2"/>
                </div>

                <div className="flex gap-10">
                    <label htmlFor="Rocket Type">Rocket Type</label>
                     <input type="text" name="rocket" className="border c1 px-2"/>
                </div>
                
                <div className="flex gap-3">
                    <label htmlFor="Destination Exoplanet">Destination Exoplanet</label>
                    <select name="destination" className="border c1 px-2" onChange={e => setChoose(e.target.value)}>
                        <option value="Kepler-186f">{exoplanets.data[0].planet}</option>
                        <option value="Proxima Centauri b">{exoplanets.data[1].planet}</option>
                        <option value="TRAPPIST-1e">{exoplanets.data[2].planet}</option>
                        <option value="LHS 1140 b">{exoplanets.data[3].planet}</option>
                        <option value="Kepler-442b">{exoplanets.data[4].planet}</option>
                        <option value="Kepler-62f">{exoplanets.data[5].planet}</option>
                        <option value="Kepler-22b">{exoplanets.data[6].planet}</option>
                    </select>
                    See info {choose}
                </div>

                <div>
                    <button disabled={subs} className="border border-[aqua] h-[2rem] px-3 rounded mt-4" >
                        {subs?"sumitting...":"submit Info"}
                    </button>
                </div> 

            </Form>
        </div>


    </div>
    </div>
  )
}

export default Launch