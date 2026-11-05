import axios from "axios";

export async function enviarEmail(email, nome, sobrenome, mensagem, plataforma) {
    try {
        const response = axios.post('https://api.siapesq.com/v1/landingPage/landingPage/', {
            email: email,
            nome: nome,
            sobrenome: sobrenome,
            mensagem: mensagem,
            plataforma: plataforma
        })

            .then(response => {
                console.log("Retorno do email: ", response);
                return response;
            })
            .catch(error => {
                console.error("Erro ao enviar email: ", error);
            });

        return response
    } catch (error) {
        console.error('Erro ao enviar email: ', error)
    }
};



