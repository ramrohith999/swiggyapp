import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Ram Rohith"
    };
    setUserName(data.name);
  }, [])




  return (

    <Provider store={appStore}>

    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>

      <div className="app">
        <Header />
        <Outlet />
      </div>



    </UserContext.Provider>
    </Provider>

  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />

      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-orange-500 border-solid"></div>
            <span className="ml-4 text-orange-600 font-medium">Loading Grocery for you...</span>
          </div>
        }> <Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart/>
      }

    ],
    errorElement: <Error />
  },


])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

