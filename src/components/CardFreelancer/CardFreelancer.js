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
      {/*      <div
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
              <b>Formação: </b>
              {props.education}
            </p>
            <p className={styles.profileDataBudget}>
              <b>Projetos recentes: </b>
              {props.recentProjects}
            </p>
            <p className={styles.profileDataStartDetails}>
              <b>Habilidades: </b>
              {props.skills}
            </p>
            <p className={styles.profileDataStartDetails}>
              <b>Interesses: </b>
              {props.interest}
            </p>
            <p className={styles.profileDataContact}>
              <b>Contato: </b> {props.contact}
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
      </div> */}

      {/* TESTE CARD */}

      <div className={styles.flipCardContainer}>
        <div className={styles.flipCard}>
          <div className={styles.cardFront}>
            <figure>
              <div className={styles.imgBg}></div>
              <img src={props.img} alt={`Foto de ${props.name}`} />
              <figcaption>{props.name}</figcaption>
            </figure>

            <ul className={styles.ulDescriptionFront}>
              <li>{props.profession}</li>

              <li>{props.branding}</li>
            </ul>
          </div>

          <div className={styles.cardBack}>
            <figure>
              <div className={styles.imgBg}></div>
              <img
                src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg"
                alt="Brohm Lake"
              />
            </figure>

            <ul className={styles.ulDescriptionBack}>
              <li>
                <b>Formação: </b>
                {props.education}
              </li>
              <li>
                <b>Projetos recentes: </b>
                {props.recentProjects}
              </li>
              <li>
                <b>Habilidades: </b>
                {props.skills}
              </li>
              <li>
                <b>Interesses: </b>
                {props.interest}
              </li>
              <li>
                <b>Contato: </b> {props.contact}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
