
import Home from './Home/home';
import Auth from './Auth/auth';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';



const route  = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
  {
    path:'/auth',
    element:<Auth/>
  }
]);

function App() {

  return (
      <RouterProvider router={route} />
  )
}

export default App
