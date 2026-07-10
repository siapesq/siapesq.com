import React from "react";
import { useTranslation } from "react-i18next";
import peixe from "../../imgs/peixes.svg";
import '../../style/siapreps/siapreps_FormS/FormS.css';
import { enviarEmail } from "../../controllers/sendEmail";


export default function SectionformS() {

  const { t } = useTranslation();

  const [formData, setFormData] = React.useState({
    nome: "",
    sobrenome: "",
    email: "",
    mensagem: "",
    plataforma: "phytobloom"
  });

  const [message, setMessage] = React.useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendMail = async (e) => {
    e.preventDefault();
    const { nome, sobrenome, email, mensagem } = formData;

    console.log("Nome: ", nome);
    console.log("Sobrenome: ", sobrenome);
    console.log("Email: ", email);
    console.log("Mensagem: ", mensagem);

    if (nome === "" || sobrenome === "" || email === "" || mensagem === "") {

      alert(t("form.fillAll"));
      return;
    } else {
      const response = await enviarEmail(email, nome, sobrenome, mensagem, "Siapreps");
      if (response.data && response.data.message) {
        setMessage(response.data.message);
        setInterval(() => {
          setMessage("");

        }, 3000);
      }
    };
  }

  return (
    <>
      <div className="contato-container">
        <div className="peixe-logo">
          <h1 id="peixetext">{t("form.title")}</h1>
          <img src={peixe} alt={t("form.sharksAlt")} />
        </div>
        <div className="form-content">
          <form onSubmit={sendMail}>
            <div className="input-group">
              <div className="input-item">
                <label htmlFor="nome">{t("form.firstName")}</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder={t("form.firstName")}
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>
              <div className="input-item">
                <label htmlFor="sobrenome">{t("form.lastName")}</label>
                <input
                  type="text"
                  id="sobrenome"
                  name="sobrenome"
                  placeholder={t("form.lastName")}
                  value={formData.sobrenome}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-item">
              <label htmlFor="email">{t("form.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("form.email")}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="mensagem">{t("form.message")}</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder={t("form.message")}
                value={formData.mensagem}
                onChange={handleChange}
              />
            </div>
            <button id="botaoSiapreps" type="submit" onClick={sendMail}>{t("form.send")}</button>
          </form>
        </div>
        {message && (
          <div className="message-box">
            {message}
          </div>
        )}
      </div>
    </>
  )
}








