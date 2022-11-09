import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToggleSidebar from "./Navigations/Sidebar";
import "../src/styles/styles.css";

// Pages
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <>
      <ToggleSidebar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="applications" element={<Apply />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
