import creation from "./Creation.js";
import { useState } from "react";

const mainFile = ({children}) => {

    const [choose,setChoose] = useState('');

  return (
   <creation.Provider value={{setChoose,choose}}>
    {children}
   </creation.Provider>
  )
}

export default mainFile