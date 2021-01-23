import { Navbar, Footer, PetForm, PostCard } from "./components";
import { Landing } from "./pages";
import PdfForm from "./components/PDF/PdfForm";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <header></header>

      <Navbar />

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
