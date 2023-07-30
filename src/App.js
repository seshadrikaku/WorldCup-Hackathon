import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Components/Routes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     <Router/>
     </BrowserRouter>
    </div>
  );
}

export default App;
