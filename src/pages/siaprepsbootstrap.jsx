import React from "react";
import Header from "../components/layouts/header"

// import siapesq from"../imgs/logo.svg";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// import siapresqPc from "../imgs/siapresqPc.svg";
import peixes from "../imgs/peixes.svg"
import peixe from "../imgs/peixe.svg"
import navio from "../imgs/navio.svg"
import siapreps from "../imgs/siapreps.svg"
import logoFooter from "../imgs/logoFooter.svg"
import zap from "../imgs/zap.png";
import insta from "../imgs/insta.png";
import email from "../imgs/email.png";
import cardume from "../imgs/cardume.png";



export default function Index() {


    return (
        <>

            <section className="header_container">
                <img src={cardume} alt="Imagem de fundo" className="bg_img" />
                <Header />
                <article className="article_header_container">
                    <h1>SIAPREPS </h1>

                    <Button variant="outline-light">Começar&nbsp;Agora</Button>{' '}
                </article>
            </section>

            <div className="barco">
                <br /><br />
                <center> <h1>O Problema</h1></center>
                <Image src={navio} fluid />
                {['sm'].map((breakpoint) => (
                    <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
                        <ListGroup.Item><p className="porcentagem">3%</p><br /><p>do total de Gases do Efeito Estufa (GEE) lançados na atmosfera</p></ListGroup.Item>
                        <ListGroup.Item><p className="porcentagem">50%</p> <br /><p>do óleo diesel é desperdiçado durante a procura por peixes</p></ListGroup.Item>
                        <ListGroup.Item><p className="porcentagem">MAIOR</p><br /><p>Parte do tempo de uma navegação é utilizada para procurar peixes.</p></ListGroup.Item>
                    </ListGroup>
                ))}
            </div>

            <div className="plataforma">
                <Image src={siapreps} fluid />
                <p>A plataforma SIAPREPS disponibiliza aos usuários mapas que permitem localizar e monitorar os cardumes em tempo real, mostrando as áreas com maior produtividade para diferentes espécies de pescado.</p>
                <Button variant="outline-light">começar agora</Button>{' '}
                <Button variant="outline-dark">começar agora</Button>{' '}
            </div>

            <div>
                <h1>Veja as principais espécies rastreáveis</h1>
                <br />
            </div>

            <div className="especies">

                <Card style={{ width: '18rem' }}>
                    <Card.Title>Tainha</Card.Title>
                    <Card.Img variant="top" src={peixe} />
                    <Card.Body>
                        <Card.Text>
                            texto provisorio
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Bagre</Card.Title>
                    <Card.Img variant="top" src={peixe} />
                    <Card.Body>
                        <Card.Text>
                            texto provisorio
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Salmão</Card.Title>
                    <Card.Img variant="top" src={peixe} />
                    <Card.Body>
                        <Card.Text>
                            texto provisorio
                        </Card.Text>
                    </Card.Body>
                </Card><Card style={{ width: '18rem' }}>
                    <Card.Title>Peixe lua</Card.Title>
                    <Card.Img variant="top" src={peixe} />
                    <Card.Body>
                        <Card.Text>
                            texto provisorio
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <br />
                <h2>Tenha praticidade e eficiencia para atividade pesqueira. Te mostramos a localização do peixe.</h2><br />
                <h3>Obs: Nós filtramos áreas com menor probabilidade de haver animais proibidos de pesca, como tubaroes, baleias, e tartarugas</h3>
            </div>

            <div className="formulario">
                <h1>Entre em contato</h1>
                <br />
                <img src={peixes} alt="" />
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control type="text" placeholder="Sobrenome" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Contato" />
                    </Form.Group>


                    <center><Button variant="primary" >enviar</Button></center>
                </Form>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="social-media">
                        <a href="https://www.instagram.com/siapesq" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="" /> @siapesq
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5553999503671">
                            <img src={zap} alt="" /> (53) 99950-3671
                        </a>
                        <a href="mailto:siapesq@gmail.com">
                            <img src={email} alt="" /> siapesq@gmail.com
                        </a>

                        <div className="footer-bottom">
                            <img src={logoFooter} alt="SIAPESQ Logo" className="logo" />
                        </div>
                    </div>
                    <p>Copyright © 2024 SIAPESQ | Powered by SIAPESQ</p>
                </div>
            </footer>
        </>
    )
}