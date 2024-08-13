import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Pages/MainLayout/MainLayout"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import NotFound2 from "./Pages/NotFound2/NotFound2"
import CounterContextProvider from "./Context/CounterContext/CounterContext"
import UserContextProvider from "./Context/UserContext/UserContext"
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute"
import ProductDetails from "./Pages/ProductDetails/ProductDetails"



function App() {


  let routers = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element:
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
        },
        {
          path: "cart",
          element:
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
        },
        {path:"productdetails/:id", 
          element:<ProtectedRoute>
            <ProductDetails/>
          </ProtectedRoute>
           },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound2 /> }
      ]
    }])
  return (

    <UserContextProvider>


      <CounterContextProvider>

        <RouterProvider router={routers}></RouterProvider>

      </CounterContextProvider>


    </UserContextProvider>



  )
}

export default App
