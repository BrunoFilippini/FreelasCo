import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./CardProjects.module.css";

export function CardProject(props) {
  const [expanded, setExpanded] = useState(false);

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/giglandGigs/${props.id}`
      );
      props.setRereder(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.main}>
      <div
        className={`${styles.profile} ${
          expanded ? styles["profile--expanded"] : styles["profile--unexpanded"]
        }`}
        onClick={() => {
          setExpanded((prevState) => !prevState);
        }}
      >
        <div className={styles.profileBanner}></div>
        <div>
          <div className={styles.profilePic}>
            <img
              className={styles.imgPerson}
              src={props.img}
              alt={`Foto de ${props.nameProject}`}
            />
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>{props.nameProject}</span>
            <span className={styles.profileInfoUsername}>{props.area}</span>
            <span className={styles.profileInfoUsernameB}>
              <b>{props.description}</b>
            </span>
          </div>
        </div>
        <div className={styles.profileData}>
          <span className={styles.profileDataFollowing}>
            <p className={styles.profileDataStartDate}>
              <b>Data de início: </b>
              {props.startDate}
            </p>
            <p className={styles.profileDataBudget}>
              <b>Budget: </b> ${props.budget}
            </p>
            <p className={styles.profileDataStartDetails}>
              <b>Detalhes: </b>
              {props.details}
            </p>
            <p className={styles.profileDataContact}>
              <b>Contato: </b>
              {props.contact}
            </p>
            <Link className={styles.textLink} to={`/edit-Project/${props.id}`}>
              <button type="button" className={styles.btn}>
                Editar Perfil
              </button>
            </Link>
            <button type="button" onClick={handleDelete} className={styles.btn}>
              Deletar Perfil
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
