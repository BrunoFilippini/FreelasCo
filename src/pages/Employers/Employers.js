import styles from "./Employers.module.css";
import { CardEmployer } from "../../components/CardEmployer/CardEmployer";
import { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Employers() {
  const [employer, setEmployer] = useState([]);
  const [rerender, setRereder] = useState(true);
  const [backup, setBackup] = useState([]);

  useEffect(() => {
    async function fetchEmployer() {
      try {
        const result = await axios.get(
          "https://ironrest.herokuapp.com/giglandGigs"
        );
        setEmployer([...result.data]);

        setBackup([...result.data]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEmployer();
    setRereder(false);
  }, [rerender]);

  function filterEmployer(searchParams) {
    if (searchParams === "") {
      setEmployer([...backup]);
      return;
    }

    const filtered = employer.filter((currentEmployer) => {
      return (
        currentEmployer.area
          .toLowerCase()
          .includes(searchParams.toLowerCase()) ||
        currentEmployer.budget
          .toLowerCase()
          .includes(searchParams.toLowerCase())
      );
    });

    setEmployer(filtered);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.h1Free}>Employers</h1>
      <SearchBar placeholder="Find a gig" filterAPI={filterEmployer} />
      <div className={styles["grid-container"]}>
        {employer.map((currentEmployer) => {
          return (
            <CardEmployer
              key={currentEmployer._id}
              setRereder={setRereder}
              id={currentEmployer._id}
              nameProject={currentEmployer.nameProject}
              area={currentEmployer.area}
              description={currentEmployer.description}
              startDate={currentEmployer.startDate}
              budget={currentEmployer.budget}
              details={currentEmployer.details}
              contact={currentEmployer.contact}
              img={currentEmployer.img}
            />
          );
        })}
      </div>
    </div>
  );
}
