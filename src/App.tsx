import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Word from "./components/Word";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="body bg-cyan-900">
      <Router>
        <nav>
          <Search />
        </nav>
        <Routes>
          <Route path="/dictionary/" element={<Word />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
