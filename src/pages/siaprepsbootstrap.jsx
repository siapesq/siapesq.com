import React from "react";
import { useTranslation } from "react-i18next";
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



export default function Index( ) {

    const { t } = useTranslation();

    return (
        <>

            <section className="header_container">
                <img src={cardume} alt={t("common.backgroundAlt")} className="bg_img" />
                <Header />
                <article className="article_header_container">
                    <h1>SIAPREPS </h1>

                    <Button variant="outline-light">{t("legacy.startNow")}</Button>{' '}
                </article>
            </section>

            <div className="barco">
                <br /><br />
                <center> <h1>{t("legacy.problemTitle")}</h1></center>
                <Image src={navio} fluid />
                {['sm'].map((breakpoint) => (
                    <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
                        <ListGroup.Item><p className="porcentagem">{t("legacy.stat1Value")}</p><br /><p>{t("legacy.stat1Text")}</p></ListGroup.Item>
                        <ListGroup.Item><p className="porcentagem">{t("legacy.stat2Value")}</p> <br /><p>{t("legacy.stat2Text")}</p></ListGroup.Item>
                        <ListGroup.Item><p className="porcentagem">{t("legacy.stat3Value")}</p><br /><p>{t("legacy.stat3Text")}</p></ListGroup.Item>
                    </ListGroup>
                ))}
            </div>

            <div className="plataforma">
                <Image src={siapreps} fluid />
                <p>{t("legacy.platformText")}</p>
                <Button variant="outline-light">{t("legacy.startNowLight")}</Button>{' '}
                <Button variant="outline-dark">{t("legacy.startNowDark")}</Button>{' '}
            </div>

            <div>
                <h1>{t("legacy.speciesTitle")}</h1>
                <br />
            </div>

            <div className="especies">

                <Card style={{ width: '18rem' }}>
                    <Card.Title>{t("legacy.species1")}</Card.Title>
                    <Card.Img variant="top" src={peixe} />
                    <Card.Body>
                        <Card.Text>
                            {t("legacy.speciesDescription")}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>{t("legacy.species2")}</Card.Title>
                    <Card.Img variant="top" src={peixe} />
                    <Card.Body>
                        <Card.Text>
                            {t("legacy.speciesDescription")}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>{t("legacy.species3")}</Card.Title>
                    <Card.Img variant="top" src={peixe} />
                    <Card.Body>
                        <Card.Text>
                            {t("legacy.speciesDescription")}
                        </Card.Text>
                    </Card.Body>
                </Card><Card style={{ width: '18rem' }}>
                    <Card.Title>{t("legacy.species4")}</Card.Title>
                    <Card.Img variant="top" src={peixe} />
                    <Card.Body>
                        <Card.Text>
                            {t("legacy.speciesDescription")}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <br />
                <h2>{t("legacy.practicality")}</h2><br />
                <h3>{t("legacy.obs")}</h3>
            </div>

            <div className="formulario">
                <h1>{t("legacy.contactTitle")}</h1>
                <br />
                <img src={peixes} alt="" />
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>{t("form.firstName")}</Form.Label>
                            <Form.Control type="text" placeholder={t("form.firstName")} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>{t("form.lastName")}</Form.Label>
                            <Form.Control type="text" placeholder={t("form.lastName")} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" >
                        <Form.Label>{t("form.email")}</Form.Label>
                        <Form.Control type="email" placeholder={t("form.email")} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>{t("form.message")}</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder={t("form.message")} />
                    </Form.Group>


                    <center><Button variant="primary" >{t("form.send")}</Button></center>
                </Form>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="social-media">
                        <a href="https://www.instagram.com/siapesq" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="" /> {t("contact.instagram")}
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5553999503671">
                            <img src={zap} alt="" /> {t("contact.phone")}
                        </a>
                        <a href="mailto:siapesq@gmail.com">
                            <img src={email} alt="" /> {t("contact.email")}
                        </a>

                        <div className="footer-bottom">
                            <img src={logoFooter} alt={t("footer.logoAlt")} className="logo" />
                        </div>
                    </div>
                    <p>{t("footer.copyright")}</p>
                </div>
            </footer>
        </>
    )
}