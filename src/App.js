import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Projects } from "./pages/ProjectsList/ProjectsList";
import { Freelancers } from "./pages/Freelancers/Freelancers";
import { FormFreelancer } from "./pages/FormFreelancer/FormFreelancer";
import { EditFreelancer } from "./pages/EditFreelancer/EditFreelancer";
import { EditProject } from "./pages/EditProjects/EditProjects";
import { FormProject } from "./pages/FormProjects/FormProjects";
import { SearchBar } from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Freelancers" element={<Freelancers />} />
        <Route path="/FormFreelancer" element={<FormFreelancer />} />
        <Route path="/edit-freelancer/:id" element={<EditFreelancer />} />
        <Route path="/FormProject" element={<FormProject />} />
        <Route path="/edit-Project/:id" element={<EditProject />} />
        <Route path="/SearchBar" element={<SearchBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
