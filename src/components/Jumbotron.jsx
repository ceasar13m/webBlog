import React from "react";
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import ocean from "./../static/img/ocean.jpg";
import styled from "styled-components";

const Styles = styled.div`
    .jumbo {
        background: url(${ocean}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }   
`

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Web developer blog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at cum dolore facere harum,
                        id
                        inventore
                        mollitia nisi provident reprehenderit similique sit sunt voluptates! Ab adipisci aut
                        consequuntur
                        dolor,
                        dolorum fuga inventore ipsum nemo nobis nostrum odio perspiciatis quisquam ratione unde veniam.
                        Amet
                        architecto blanditiis laboriosam obcaecati quis similique totam!</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron;