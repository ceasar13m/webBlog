import React from "react";
import Slider from "./Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ocean from "./../static/img/ocean.jpg";
import Jumbotron from "./Jumbotron";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={ocean}/>
                            <Card.Body>
                                <Card.Title>Web dev blog</Card.Title>

                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, sequi.
                                </Card.Text>

                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={ocean}/>
                            <Card.Body>
                                <Card.Title>Web dev blog</Card.Title>

                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, sequi.
                                </Card.Text>

                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={ocean}/>
                            <Card.Body>
                                <Card.Title>Web dev blog</Card.Title>

                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, sequi.
                                </Card.Text>

                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Jumbotron/>

            <Container style={{marginBottom: '30px'}}>
                <Row>
                    <Col md={7}><img src={ocean} height={400}/></Col>
                    <Col md={5}>
                        <h2>Web developer blog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et itaque officia reprehenderit? A
                            alias aliquid aspernatur consectetur cumque eligendi est, explicabo, fugit harum in maiores
                            maxime natus neque officiis possimus provident quae quidem quod quos ratione, recusandae
                            repudiandae sit ut. Architecto illo provident sed suscipit totam. Animi ipsam similique
                            veritatis?</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Home;