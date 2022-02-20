import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./CardFreelancer.module.css";

export function CardFreelancer(props) {
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

            <div className={styles.allButtonsCards}>
              <Link to={`/edit-freelancer/${props.id}`}>
                <button className={styles.buttonEdit} type="button">
                  Editar Perfil
                </button>
              </Link>

              <button
                className={styles.buttonDelete}
                onClick={handleDelete}
                type="button"
              >
                Deletar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
