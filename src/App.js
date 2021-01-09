import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Navbar, Landing } from "./components";
import PetForm from "./components/PetForm";

function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <Navbar />
        <Landing />
        <PetForm />
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
