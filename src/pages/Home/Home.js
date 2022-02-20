import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import freelasLogo from "../../assets/freelasLogo.png";

import coverHome from "../../assets/coverHome.png";

export function Home() {
  return (
    <>
      <div className={styles.bgColor}>
        <div className={styles.buttons}>
          <div className={styles.text}>
            <p>
              Veja os Projetos <br /> disponíveis !
            </p>
            <Link to="/Freelancers">
              <span className={styles.btnFreelancer}>Freelancers</span>
            </Link>
          </div>

          <div className={styles.text}>
            <p>
              Veja os Projetos <br /> disponíveis !
            </p>
            <Link to="/Employers">
              <span className={styles.btnEmployer}>Projetos</span>
            </Link>
          </div>
        </div>

        <div className={styles.logoAndimgBg}>
          <img
            className={styles.logoGigLand}
            src={freelasLogo}
            alt="Logo Gigland"
          />
          <img className={styles.bgImg} src={coverHome} alt="" />
        </div>
      </div>
    </>
  );
}
