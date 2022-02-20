import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Employers } from "./pages/Employers/Employers";
import { Freelancers } from "./pages/Freelancers/Freelancers";
import { FormFreelancer } from "./pages/FormFreelancer/FormFreelancer";
import { EditFreelancer } from "./pages/EditFreelancer/EditFreelancer";
import { EditEmployer } from "./pages/EditEmployer/EditEmployer";
import { FormEmployer } from "./pages/FormEmployer/FormEmployer";
import { SearchBar } from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Employers" element={<Employers />} />
        <Route path="/Freelancers" element={<Freelancers />} />
        <Route path="/FormFreelancer" element={<FormFreelancer />} />
        <Route path="/edit-freelancer/:id" element={<EditFreelancer />} />
        <Route path="/FormEmployer" element={<FormEmployer />} />
        <Route path="/edit-employer/:id" element={<EditEmployer />} />
        <Route path="/SearchBar" element={<SearchBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
