import { Navbar, Footer } from "./components";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">

      <Navbar />
      
      <footer>
        <Footer />
      </footer> 
    </div>
  );
}

export default App;
