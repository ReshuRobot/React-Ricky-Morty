
import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const App = () => {
  //useOnlineStatus is a custom hook that returns true/false
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection</h1>;
  
  return (
 
    

<div className="App">
      <Header />
      <Outlet />

      {/* <BodyContainer /> */}
      {/* <Footer/> */}
    </div>

    
  );
};

export default App;
