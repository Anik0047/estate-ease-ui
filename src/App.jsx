import HomePage from "./Routes/HomePage/HomePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./Routes/ListPage/ListPage";
import Layout from "./Routes/Layout/Layout";
import SinglePage from "./Routes/SinglePage/SinglePage";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <HomePage />
        },
        {
          path:"/list",
          element: <ListPage />
        },
        {
          path:"/:id",
          element: <SinglePage />
        }
      ]
    }
  ]);

  return (



  <RouterProvider router={router} />
  )

}

export default App
