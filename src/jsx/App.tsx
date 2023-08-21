import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home/home';


const route  = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    }
]);

function App() {

  return (
      <RouterProvider router={route} />
  )
}

export default App
