import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./CardProjects.module.css";

export function CardProject(props) {
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
    /*     <div className={styles.main}>
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
    </div> */

    <div className={styles.flipCardContainer}>
      <div className={styles.flipCard}>
        <div className={styles.cardFront}>
          <figure>
            <div className={styles.imgBg}></div>
            <img
              src={props.img}
              className={styles.imgSize}
              alt={`Foto de ${props.nameProject}`}
            />
            <figcaption>{props.nameProject}</figcaption>
          </figure>

          <ul className={styles.ulDescriptionFront}>
            <li>{props.area}</li>

            <li>{props.description}</li>
          </ul>
        </div>

        <div className={styles.cardBack}>
          <figure>
            <div className={styles.imgBg}></div>
            <img
              className={styles.imgSize}
              src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg"
              alt="Brohm Lake"
            />
          </figure>

          <ul className={styles.ulDescriptionBack}>
            <li>
              <b>Data de início: </b>
              {props.startDate}
            </li>
            <li>
              <b>Budget: </b>
              {props.budget}
            </li>
            <li>
              <b>Detalhes: </b>
              {props.details}
            </li>
            <li>
              <b>Contato: </b>
              {props.contact}
            </li>
          </ul>

          <div className={styles.allButtonsCards}>
            <Link to={`/edit-Project/${props.id}`}>
              <button className={styles.buttonEdit} type="button">
                Editar Projeto
              </button>
            </Link>

            <button
              className={styles.buttonDelete}
              onClick={handleDelete}
              type="button"
            >
              Deletar Projeto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
