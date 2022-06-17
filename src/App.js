import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div className="loading">...Loading</div>}>
              <Home />
            </Suspense>
          }
        />

        <Route
          exact
          path="/about"
          element={
            <Suspense fallback={<div className="loading">...Loading</div>}>
              <About />
            </Suspense>
          }
        />

        <Route
          exact
          path="/skills"
          element={
            <Suspense fallback={<div className="loading">...Loading</div>}>
              <Skills />
            </Suspense>
          }
        />

        <Route
          exact
          path="/projects"
          element={
            <Suspense fallback={<div className="loading">...Loading</div>}>
              <Projects />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
