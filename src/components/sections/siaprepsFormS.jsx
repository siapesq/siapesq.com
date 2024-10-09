import React from "react";
import peixe from "../../imgs/peixes.svg";
import '../../style/siapreps/siapreps_FormS/FormS.css';
import { enviarEmail } from "../../controllers/sendEmail";


export default function SectionformS() {

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

      alert("Preencha todos os campos!");
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
          <h1 id="peixetext">Entre em contato conosco!</h1>
          <img src={peixe} alt="babys sharks" />
        </div>
        <div className="form-content">
          <form onSubmit={sendMail}>
            <div className="input-group">
              <div className="input-item">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleChange}
                />            </div>
              <div className="input-item">
                <label htmlFor="sobrenome">Sobrenome</label>
                <input
                  type="text"
                  id="sobrenome"
                  name="sobrenome"
                  placeholder="Sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Mensagem"
                value={formData.mensagem}
                onChange={handleChange}
              />
            </div>
            <button id="botaoSiapreps" type="submit" onClick={sendMail}>Enviar</button>
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








