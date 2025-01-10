import {createRoot} from "react-dom/client"
import App from "./App";
import {createBrowserRouter,RouterProvider} from 'react-router';
import Error from "./components/Error";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement:<Error />,
      children:[
        {
           path:'/',
           element:<Home />
       },
      {
        path:'/:country',
        element:<CountryDetail />
      },
      {
      path:'/contact',
      element:<div>hyyy</div>
      }
  ]}
])
const root=createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)
