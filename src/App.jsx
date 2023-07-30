import './App.css';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


// layouts
import HomeLayOut from './LayOuts/HomeLayOut';
import HostLayOut from './LayOuts/HostLayOut';
import HostVanLayOut from './LayOuts/HostVanLayOut';

import Home from './Pages/Home/Home';
import Vans from './Pages/Home/Vans';
import About from './Pages/Home/About';
import VanDetails from './Pages/Home/VanDetails';

import DashBoard from './Pages/Host/DashBoard';
import Reviews from './Pages/Host/Reviews';
import MyVans from './Pages/Host/MyVans';
import Income from './Pages/Host/Income';

import MyVanDetails from './Pages/Host/myVanDetails';
import MyVanPricing from './Pages/Host/myVanPricing';
import MyVanPhotos from './Pages/Host/myVanPhotos';

// loaders 
import HomeVanLoader from './Components/Loaders/HomeVanLoader'; 
import VanDetailsLoader from './Components/Loaders/HomeVanDetailsLoader';
import HostDetails_VansLoader from './Components/Loaders/HostDetailsLoader';
import HostVanIdLoader from "../src/Components/Loaders/HostVanIdLoader";

//ErrorElement
import Error from './Pages/Others/Error';

// Not FOund
import NotFound from './Pages/Others/404';

// Login Page
import Login from './Pages/Others/Login';

// api for checking loginin
import utils from './Components/Api/Utils';

import formLoader from './Components/Loaders/FormLoader';

import formAction from './Components/FormAction';

// mirage js server
import server from './server';

// // server()

let store = JSON.parse(localStorage.getItem("rentedVans"))  || []

localStorage.setItem("rentedVans", JSON.stringify(store))

// const routerEl = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<HomeLayOut />}>
//     <Route index element={<Home loadingState={loaderState} stateFunc={changeState} />} />
//     <Route path='vans' errorElement={<Error />} loader={HomeVanLoader} element={<Vans />} />
//     <Route path='about' element={<About />} />
//     <Route path='vans/:id' errorElement={<Error />} loader={VanDetailsLoader} element={<VanDetails />} />

//     <Route path='host' element={<HostLayOut />}>
//       <Route index errorElement={<Error />} loader={HostDetails_VansLoader} element={<DashBoard />} />
//       <Route path="income" element={<Income />} loader={async ({request}) => {await utils(request); return null}} />
//       <Route path="reviews" element={<Reviews />} loader={async ({request}) => {await utils(request); return null}} />
//       <Route path="vans" errorElement={<Error />} loader={HostDetails_VansLoader} element={<MyVans />} />
//       <Route path='vans/:id' errorElement={<Error />} loader={HostVanIdLoader} element={<HostVanLayOut />}>
//         <Route index element={<MyVanDetails />} loader={async ({request}) => {await utils(request); return null}} />
//         <Route path='pricing' element={<MyVanPricing />} loader={async ({request}) => {await utils(request); return null}} />
//         <Route path='photos' element={<MyVanPhotos />} loader={async ({request}) => {await utils(request); return null}} />
//       </Route>
//     </Route>

//     <Route path="login" loader={formLoader} action={formAction} element={<Login />} />
//     <Route path='*' element={<NotFound />} />
//   </Route>
// ))



function App() {
  // let [pathName, setPathName] 


  const routerEl = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<HomeLayOut />}>
      <Route index element={<Home />} />
      <Route path='vans' errorElement={<Error />} loader={HomeVanLoader} element={<Vans />} />
      <Route path='about' element={<About />} />
      <Route path='vans/:id' errorElement={<Error />} loader={VanDetailsLoader} element={<VanDetails  />} />
  
      <Route path='host' element={<HostLayOut />}>
        <Route index errorElement={<Error />} loader={HostDetails_VansLoader} element={<DashBoard />} />
        <Route path="income" element={<Income />} loader={async ({request}) => {await utils(request); return null}} />
        <Route path="reviews" element={<Reviews />} loader={async ({request}) => {await utils(request); return null}} />
        <Route path="vans" errorElement={<Error />} loader={HostDetails_VansLoader} element={<MyVans />} />
        <Route path='vans/:id' errorElement={<Error />} loader={HostVanIdLoader} element={<HostVanLayOut />}>
          <Route index element={<MyVanDetails />} loader={async ({request}) => {await utils(request); return null}} />
          <Route path='pricing' element={<MyVanPricing />} loader={async ({request}) => {await utils(request); return null}} />
          <Route path='photos' element={<MyVanPhotos />} loader={async ({request}) => {await utils(request); return null}} />
        </Route>
      </Route>
  
      <Route path="login" loader={formLoader} action={formAction} element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={routerEl} />
  )
}

export default App
