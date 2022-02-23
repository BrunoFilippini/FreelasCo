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
