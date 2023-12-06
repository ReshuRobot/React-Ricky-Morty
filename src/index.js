import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import BodyContainer from "./components/Body";
import CardDetails from "./components/CardDetails";
import Location from "./components/Location";




//lazy loading
const Episode = lazy(() =>
  import("./components/Episode")
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<BodyContainer/>

      },
     
      {
        path:"/episode",
        element:<Suspense fallback={<h1>Loading....</h1>} ><Episode/></Suspense>
       
      },
      {
        path:"/location",
        element:<Location/>
      },
      {
        path:"/characters/:id",
        element:<CardDetails/>
      },
    
     

    ],
    errorElement:<Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
