import React, { useEffect } from "react";
import styles from "./adventure.module.css";
import { Row, Col } from "react-bootstrap";
import { homeAdventure } from "../data";

function Adventure (){
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <section className={styles.content}>
            <h2 className="text-center mt-5 mb-5">Inspiration for your next adventure</h2>

            <Row>
                {homeAdventure.map((item)=>{
                    const { id, img, name, price, distance, duration } = item;
                    return(
                        <Col md={3} key={id} className={`mb-4 ${styles.subcontent}`}>
                            <img src={img} alt={name} className={styles.image} />

                            <div className="d-flex align-items-center mt-2">
                                <p>{name}</p>
                                <p>{price}</p>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                                <p>{distance}</p>
                                <p>{duration}</p>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                                <img src="/assets/Star.svg" alt="star" />
                                <img src="/assets/Star.svg" alt="star" />
                                <img src="/assets/Star.svg" alt="star" />
                                <img src="/assets/Star.svg" alt="star" />
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </section>
    );
}

export default Adventure;