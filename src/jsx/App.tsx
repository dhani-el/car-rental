
import Home from './Home/home';
import Auth from './Auth/auth';
import Rent from './Rent/index';
import SingleCar from './SingleCar/index';
import Layout from './Layout/layout';
// import ComingSoon from './Soon';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';



const route  = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/auth',
          element:<Auth/>
        },
        {
          path:'/rent',
          element:<Rent/>,
        },
        {
          path:'/rent/:brand',
          element:<SingleCar/>
        },
    //     {
    //   path:'*',
    //   element:<ComingSoon/>
    // }
      ]
    },


]);

function App() {

  return (
      <RouterProvider router={route} />
  )
}

export default App
