import MainFiles from './Context/mainFile';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Root from './pages/Root';
import Homepage from './pages/Homepage';
import Upcoming,{pushedData,getExoplanet} from './pages/Upcoming';
import ErrorM from './pages/Error/Message1';
import Upscoming,{getInfo} from './pages/UpsComing';

const App = () => {

const routes = createBrowserRouter([
 {
  path:'/',
  element:<Root/>,
errorElement:<ErrorM/>,

children:[
  {index:true,element:<Homepage/>},
  {path:'Launch',element:<Upcoming/>,
    id:"exoplanet",
    loader:getExoplanet,
  action:pushedData},
  {path:'Upcoming',
    element:<Upscoming/>,
    id:'info',
    loader:getInfo
  }
]
 }
])


  return (
   <>
   <MainFiles>
   <RouterProvider router={routes}/>
   </MainFiles>
  
   </>
  )
}

export default App