
import Home from './Home/home';
import Auth from './Auth/auth';
import Rent from './Rent/index';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';



const route  = createBrowserRouter([
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
    element:<Rent/>
  }
]);

function App() {

  return (
      <RouterProvider router={route} />
  )
}

export default App
