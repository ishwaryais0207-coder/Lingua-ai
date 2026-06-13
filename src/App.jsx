import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import Generator from "./pages/Generator";
function App() {
  return (
    <BrowserRouter>
      <div className="p-5">
        <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold">
    Lingua AI
  </h1>

  <div className="flex gap-6">
    <Link to="/">Home</Link>
    <Link to="/translator">
    Open Translator
    </Link>
    <Link to="/generator">
    Open Generator
    </Link>
  </div>
</nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;