import styles from "./FormFreelancer.module.css";
import { useState } from "react";
import axios from "axios";
import formJobsImg from "../../assets/jobsImg.png";

import { useNavigate } from "react-router-dom";

export function FormFreelancer() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    profession: "",
    branding: "",
    education: "",
    recentProjects: "",
    skills: "",
    interest: "",
    contact: "",
    img: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    for (let key in form) {
      if (!form[key]) {
        window.alert(`Gentileza preencher o campo ${key} corretamente`);
        return;
      }
    }

    try {
      await axios.post("https://ironrest.herokuapp.com/giglandFreelas", form);
      navigate(`/Projects`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.divPage}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h2 className={styles.title}>Preencha seu cadastro:</h2>
          <label htmlFor="freelancerName">Nome: </label>
          <input
            maxlength="32"
            id="freelancerName"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="profession">Profissão:</label>
          <input
            maxlength="32"
            id="profession"
            name="profession"
            onChange={handleChange}
            value={form.profession}
          />
          <label htmlFor="branding">Uma breve descrição sobre você:</label>
          <input
            maxlength="128"
            id="branding"
            name="branding"
            value={form.branding}
            onChange={handleChange}
          />
          <label htmlFor="education">Sua formação:</label>
          <input
            maxlength="128"
            id="education"
            name="education"
            value={form.education}
            onChange={handleChange}
          />
          <label htmlFor="recentProjects">
            Conte um pouco sobre seus trabalhos anteriores:
          </label>
          <input
            maxlength="128"
            id="recentProjects"
            name="recentProjects"
            value={form.recentProjects}
            onChange={handleChange}
          />
          <label htmlFor="skills">
            Quais são as suas principais habilidades?
          </label>
          <input
            maxlength="128"
            id="skills"
            name="skills"
            maxLength={50}
            type="text"
            value={form.skills}
            onChange={handleChange}
          />
          <label htmlFor="interest">
            Quais são seus interesses e objetivos futuros?
          </label>
          <input
            maxlength="64"
            id="interest"
            name="interest"
            value={form.interest}
            onChange={handleChange}
          />
          <label htmlFor="contact">Seu contato:</label>
          <input
            maxlength="64"
            id="contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
          />

          <label htmlFor="img">Link da foto para seu perfil:</label>
          <input id="img" name="img" value={form.img} onChange={handleChange} />
          <button type="submit">
            <span>Cadastre seu Perfil !</span>
          </button>
        </div>
      </form>
      <img
        src={formJobsImg}
        className={styles.formImg}
        alt="img ilustrativa formulário"
      />
    </div>
  );
}
