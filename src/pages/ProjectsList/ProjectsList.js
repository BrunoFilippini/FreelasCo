import styles from "./Projects.module.css";
import { CardProject } from "../../components/CardProjects/CardProjects";
import { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Projects() {
  const [Project, setProject] = useState([]);
  const [rerender, setRereder] = useState(true);
  const [backup, setBackup] = useState([]);

  useEffect(() => {
    async function fetchProject() {
      try {
        const result = await axios.get(
          "https://ironrest.herokuapp.com/giglandGigs"
        );
        setProject([...result.data]);

        setBackup([...result.data]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProject();
    setRereder(false);
  }, [rerender]);

  function filterProject(searchParams) {
    if (searchParams === "") {
      setProject([...backup]);
      return;
    }

    const filtered = Project.filter((currentProject) => {
      return (
        currentProject.area
          .toLowerCase()
          .includes(searchParams.toLowerCase()) ||
        currentProject.budget.toLowerCase().includes(searchParams.toLowerCase())
      );
    });

    setProject(filtered);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.h1Free}>Projects</h1>
      <SearchBar placeholder="Find a gig" filterAPI={filterProject} />
      <div className={styles["grid-container"]}>
        {Project.map((currentProject) => {
          return (
            <CardProject
              key={currentProject._id}
              setRereder={setRereder}
              id={currentProject._id}
              nameProject={currentProject.nameProject}
              area={currentProject.area}
              description={currentProject.description}
              startDate={currentProject.startDate}
              budget={currentProject.budget}
              details={currentProject.details}
              contact={currentProject.contact}
              img={currentProject.img}
            />
          );
        })}
      </div>
    </div>
  );
}
