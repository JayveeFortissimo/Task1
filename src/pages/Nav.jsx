import { NavLink } from "react-router-dom";
import image from '../assets/Nasa.png';



const Nav = () => {
  return (
 <header className="min-h-[4rem] flex justify-center items-center">
    <nav className="flex items-center gap-10">
       <img src={image} alt="" className="h-[4rem]" />
       <div className="flex gap-10">
        <NavLink to='/' className={({isActive})=>isActive?'border-b border-[aqua] ':undefined} end>Home</NavLink>
        <NavLink to='Launch' className={({isActive})=>isActive?'border-b border-[aqua]':undefined}  >Launch</NavLink>
        <NavLink to='Upcoming' className={({isActive})=>isActive?'border-b border-[aqua]':undefined} >Upcoming</NavLink>
       </div>
    </nav>
 </header>
  )
}

export default Nav