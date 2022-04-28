import "./App.scss";
import Header from "./components/Banner/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className=" bg-[#eaebfd]">
      <div className="container mx-auto bg-gradient-to-br from-[#E9F3FD] via-[#e5e5fe84] to-[#E9F3FD]">
        <div>
          <Navbar />
          <Header />
          
        </div>
      </div>
    </div>
  );
}

export default App;
