// import barcopesca from "../../imgs/barcopesca.svg";
// import textobarco from "../../imgs/textoBarco.svg";
// import bordabarco from "../../imgs/bordabarco.svg";
// import mar from "../../imgs/marBarco.jpg";
// import onda from "../../videos/agua.MOV";
import "../../style/siapreps/siapreps_barco/barco.css";

export default function SectionBarco() {
  return (
    <>
      <div className="containerPesca">
        <div className="title">
          <h2>Localização do pescado</h2>
        </div>
        <div className="divBarco">
          <iframe
            src="https://my.spline.design/untitledcopy-KBaXkeheHqXXHuZfUK9X2RKN/"
            frameborder="0"
            width="100%"
            height={"100%"}
            title="Barco da Siapesq"
          ></iframe>
        </div>
        <div className="divInfos">
          <div className="infoContainer">
            <div>
              <h3>60%</h3>
              <p>Redução do Custo no Processo de Procura do Pescado</p>
            </div>
            <div>
              <h3>60%</h3>
              <p>Redução da Emissão de Gases Estufas para a Atmosfera</p>
            </div>
            <div>
              <h3>70%</h3>
              <p>Otimização do Tempo das Pescarias</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
