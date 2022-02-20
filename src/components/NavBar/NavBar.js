import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import freelasLogo from "../../assets/freelasLogo.png";

export function NavBar() {
  const location = useLocation();

  return (
    <>
      <nav
        className={location.pathname === "/" ? styles.noShow : styles.navBarAll}
      >
        <div className={styles.alignmentButton}>
          <div className={styles.buttonsLinksListsFreelas}>
            <Link to="/Freelancers">
              <button>
                <span>Freelancers</span>
              </button>
            </Link>
          </div>

          <div className={styles.buttonsLinksFormFreelas}>
            <Link to="/FormFreelancer">
              <button>
                <span>Cadastre seu Perfil</span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <Link to="/">
            <img
              className={styles.freelasLogo}
              src={freelasLogo}
              alt="Logo freelasLogo"
            />
          </Link>
        </div>

        <div className={styles.alignmentButton}>
          <div className={styles.buttonsLinksListsProjects}>
            <Link to="/Employers">
              <button>
                <span>Projetos</span>
              </button>
            </Link>
          </div>

          <div className={styles.buttonsLinksFormProjects}>
            <Link to="/FormEmployer">
              <button>
                <span>Cadastre seu Projeto</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
