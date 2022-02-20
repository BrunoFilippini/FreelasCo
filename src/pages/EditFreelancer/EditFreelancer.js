import styles from "./EditFreelancer.module.css";
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function EditFreelancer() {
  const params = useParams();
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

  useEffect(() => {
    async function fetchFreelancer() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/giglandFreelas/${params.id}`
        );
        setForm({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }
    fetchFreelancer();
  }, [params.id]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    for (let key in form) {
      if (!form[key]) {
        window.alert(`Gentileza preencher o campo ${key} corretamente`);
        return;
      }
    }

    delete form._id;
    axios
      .put(`https://ironrest.herokuapp.com/giglandFreelas/${params.id}`, form)
      .then((result) => navigate(`/Freelancers`))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className={styles.divPage}>
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <h2 className={styles.title}>Atualize seu cadastro:</h2>
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
          <span>Editar Perfil</span>
        </button>
      </div>
    </form>
  </div>
  );
}
