import "./App.css";
// import { NavLink, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
