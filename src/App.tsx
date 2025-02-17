import { Outlet } from "react-router";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
