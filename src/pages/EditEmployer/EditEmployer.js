import styles from "./EditEmployer.module.css";
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function EditEmployer() {
  const params = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nameProject: "",
    area: "",
    description: "",
    startDate: "",
    budget: "",
    details: "",
    contact: "",
    img: "",
  });

  useEffect(() => {
    async function fetchEmployer() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/giglandGigs/${params.id}`
        );
        setForm({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmployer();
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
      .put(`https://ironrest.herokuapp.com/giglandGigs/${params.id}`, form)
      .then((result) => navigate(`/Employers`))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className={styles.divPage}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h2 className={styles.title}>Atualize seu cadastro:</h2>
          <label htmlFor="nameProject">Nome do projeto:</label>
          <input
            maxlength="32"
            id="nameProject"
            placeholder="Project Name"
            name="nameProject"
            value={form.nameProject}
            onChange={handleChange}
          />
          <label htmlFor="area">Segmento</label>
          <input
            maxlength="32"
            id="area"
            placeholder="segmento"
            name="area"
            value={form.area}
            onChange={handleChange}
          />
          <label htmlFor="description">Descrição</label>
          <input
            maxlength="64"
            id="description"
            placeholder="Breve descrição"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <label htmlFor="startDate">Data</label>
          <input
            id="startDate"
            type="date"
            placeholder="Data"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
          />
          <label htmlFor="budget">Orçamento</label>
          <input
            id="budget"
            placeholder="US$0,00"
            name="budget"
            type="number"
            step="0.01"
            min="1"
            value={form.budget}
            onChange={handleChange}
          />
          <label htmlFor="details">Detalhamento</label>
          <input
            maxlength="128"
            id="details"
            placeholder="Detalhe aqui sua vaga"
            name="details"
            maxLength={50}
            type="text"
            value={form.details}
            onChange={handleChange}
          />
          <label htmlFor="contact">Contato:</label>
          <input
            maxlength="64"
            id="contact"
            placeholder="Endereço de e-mail"
            name="contact"
            value={form.contact}
            onChange={handleChange}
          />
          <label htmlFor="img">Link para logo ou imagem de seu projeto:</label>
          <input id="img" name="img" value={form.img} onChange={handleChange} />
          <button type="submit">
            <span>Editar Projeto</span>
          </button>
        </div>
      </form>
    </div>
  );
}
