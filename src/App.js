import  { Route, Routes} from "react-router-dom";
import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import Profile from './Profile/profile';
import Request from './Request/request';
import Donors from './Donors/Donors';
// import LoginForm from "./components/LoginForm/LoginForm";

import RightSide from './components/RigtSide/RightSide';



function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        

        <Routes>

          <Route path="/profile" element={<Profile />}/>
          <Route path="/" element={  <MainDash />}/>
          <Route path="/request" element={<Request/>}/>
          <Route path="/donors" element={<Donors/>}/>
          </Routes> 
          <RightSide/>

      </div>
    </div>
  );
}

export default App;


