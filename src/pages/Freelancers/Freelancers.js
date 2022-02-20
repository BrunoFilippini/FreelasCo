import axios from "axios";
import styles from "./Freelancers.module.css";
import { useState, useEffect } from "react";
import { CardFreelancer } from "../../components/CardFreelancer/CardFreelancer";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Freelancers() {
  const [freelancer, setFreelancer] = useState([]);
  const [rerender, setRerender] = useState(true);
  const [backup, setBackup] = useState([]);

  useEffect(() => {
    async function fetchFreelancer() {
      try {
        const result = await axios.get(
          "https://ironrest.herokuapp.com/giglandFreelas"
        );
        setFreelancer([...result.data]);

        setBackup([...result.data]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFreelancer();
    setRerender(false);
  }, [rerender]);

  function filterFreelancer(searchParams) {
    if (searchParams === "") {
      setFreelancer([...backup]);
      return;
    }

    const filtered = freelancer.filter((currentFreelancer) => {
      return (
        currentFreelancer.profession
          .toLowerCase()
          .includes(searchParams.toLowerCase()) ||
        currentFreelancer.skills
          .toLowerCase()
          .includes(searchParams.toLowerCase()) ||
        currentFreelancer.education
          .toLowerCase()
          .includes(searchParams.toLowerCase())
      );
    });

    setFreelancer(filtered);
  }

  return (
    <div className={styles.main}>
      <div className={styles.handleNavBar}>
        <p className={styles.titleFreelancers}>Procure por Freelancers!</p>
        <SearchBar
          placeholder="  Procure por Profissão, Habilidades ou Formação"
          filterAPI={filterFreelancer}
        />
      </div>
      <div className={styles.gridContainer}>
        {freelancer.map((currentFreelancer) => {
          return (
            <CardFreelancer
              key={currentFreelancer._id}
              setRerender={setRerender}
              id={currentFreelancer._id}
              name={currentFreelancer.name}
              profession={currentFreelancer.profession}
              branding={currentFreelancer.branding}
              education={currentFreelancer.education}
              recentProjects={currentFreelancer.recentProjects}
              skills={currentFreelancer.skills}
              interest={currentFreelancer.interest}
              contact={currentFreelancer.contact}
              img={currentFreelancer.img}
            />
          );
        })}
      </div>
    </div>
  );
}
