import styles from "./Freelancers.module.css";
import { CardFreelancer } from "../../components/CardFreelancer/CardFreelancer";
import { useState, useEffect } from "react";
import axios from "axios";
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
      return currentFreelancer.profession.toLowerCase().includes(searchParams.toLowerCase()) || currentFreelancer.skills.toLowerCase().includes(searchParams.toLowerCase()) || currentFreelancer.education.toLowerCase().includes(searchParams.toLowerCase())
    }
 
    );

  
    setFreelancer(filtered);
  
   
    
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.h1Free}>Freelancers</h1>
      <SearchBar placeholder="Find talent" filterAPI={filterFreelancer} />
      <div className={styles["grid-container"]}>
      {freelancer.map((currentFreelancer) => {
        return (
          <CardFreelancer
            setRerender={setRerender}
            key={currentFreelancer._id}
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
