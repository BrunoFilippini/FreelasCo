import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./CardFreelancer.module.css";

export function CardFreelancer(props) {
  const [expanded, setExpanded] = useState(false);
  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/giglandFreelas/${props.id}`
      );
      props.setRerender(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
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
              alt={`Foto de ${props.name}`}
            />
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>{props.name}</span>
            <span className={styles.profileInfoUsername}>
              {props.profession}
            </span>
            <span className={styles.profileInfoUsernameB}>
              <b>
                <i>{props.branding}</i>
              </b>
            </span>
          </div>
        </div>
        <div className={styles.profileData}>
          <span className={styles.profileDataFollowing}>
            <p className={styles.profileDataStartDate}>
              <b>Education: </b>
              {props.education}
            </p>
            <p className={styles.profileDataBudget}>
              <b>Recent projects: </b>
              {props.recentProjects}
            </p>
            <p className={styles.profileDataStartDetails}>
              <b>Skills: </b>
              {props.skills}
            </p>
            <p className={styles.profileDataStartDetails}>
              <b>Interests: </b>
              {props.interest}
            </p>
            <p className={styles.profileDataContact}>
              <b>Contact: </b> {props.contact}
            </p>
            <Link
              className={styles.textLink}
              to={`/edit-freelancer/${props.id}`}
            >
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
    </>
  );
}
