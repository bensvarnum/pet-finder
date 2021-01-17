import { Navbar, Footer } from "./components";
import { Landing } from "./pages";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <Navbar />
        <Landing />
        <PetForm />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
