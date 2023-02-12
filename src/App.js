import './App.css'
import { Sidenav } from './Components/SideNav/Sidenav';
import { Router } from "./Router/Router";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 left">
            <Sidenav />
          </div>
          <div className="col-md-10 right">
            <Router />
          </div>
        </div>
      </div>  



    </>
  );
}

export default App;
