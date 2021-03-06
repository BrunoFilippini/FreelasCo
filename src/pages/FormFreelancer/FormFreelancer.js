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
            maxLength="32"
            id="freelancerName"
            placeholder="Seu nome"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="profession">Profissão:</label>
          <input
            maxLength="32"
            id="profession"
            placeholder="Sua profissão"
            name="profession"
            onChange={handleChange}
            value={form.profession}
          />
          <label htmlFor="branding">Uma breve descrição sobre você:</label>
          <input
            maxLength="128"
            placeholder="Descrição sobre você"
            id="branding"
            name="branding"
            value={form.branding}
            onChange={handleChange}
          />
          <label htmlFor="education">Sua formação:</label>
          <input
            maxLength="128"
            placeholder="Sua formação"
            id="education"
            name="education"
            value={form.education}
            onChange={handleChange}
          />
          <label htmlFor="recentProjects">
            Conte um pouco sobre seus trabalhos anteriores:
          </label>
          <input
            maxLength="128"
            placeholder="Uma breve descrição dos trabalhos que participou"
            id="recentProjects"
            name="recentProjects"
            value={form.recentProjects}
            onChange={handleChange}
          />
          <label htmlFor="skills">
            Quais são as suas principais habilidades?
          </label>
          <input
            maxLength="128"
            placeholder="Suas habilidades técnicas"
            id="skills"
            name="skills"
            type="text"
            value={form.skills}
            onChange={handleChange}
          />
          <label htmlFor="interest">
            Quais são seus interesses e objetivos futuros?
          </label>
          <input
            maxLength="64"
            placeholder="Interesses e objetivos futuros"
            id="interest"
            name="interest"
            value={form.interest}
            onChange={handleChange}
          />
          <label htmlFor="contact">Seu contato:</label>
          <input
            maxLength="64"
            placeholder="Endereço de e-mail ou Telefone"
            id="contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
          />

          <label htmlFor="img">Link da foto para seu perfil:</label>
          <input
            id="img"
            placeholder="URL da sua foto de Perfil"
            name="img"
            value={form.img}
            onChange={handleChange}
          />
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
