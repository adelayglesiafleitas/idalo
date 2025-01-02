import "./App.css";
import Categorias from "./components/Categorias";
import Presentacion from "./components/presentacion";

function App() {
  return (
    <>
      <div className="container">
        <Presentacion />
        <Categorias />
      </div>
    </>
  );
}

export default App;
