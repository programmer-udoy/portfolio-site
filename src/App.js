import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter ,Switch,Route} from "react-router-dom";
import Home from "./pages/home/Home/Home";
//  import AOS from "aos";
//  import "aos/dist/aos.css";



function App() {
 
  
  return (
    <div className="App">
      
     
     <BrowserRouter>
     
     <Switch>

<Route path="/">
<Home></Home>
  </Route>

       <Route path="/home">

         <Home></Home>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
