import React, { useState } from "react";
import styles from "./main.module.css"
import { Row, Col } from "react-bootstrap";

function Main () {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <>
            <section className={styles.content}>
                <Row>
                    <Col xs={{ span: 12, order: "last" }} lg={{ span: 6, order: "first" }}>
                        <h2>
                            Rent a <span>Place</span> away from&nbsp;
                            <span>Home</span> in the Metaverse
                        </h2>

                        <p className="mt-4">
                            we provide you access to luxury and
                            affordable houses in the metaverse, get a chance 
                            to turn your imagination to reality at your comfort zone
                        </p>

                        <form onSubmit={handleSubmit} className="d-flex align-items-center mt-5">
                            <input type="text" placeholder="Search for location" />
                            <button type="submit">
                                Search
                            </button>
                        </form>
                    </Col>

                    <Col xs={{  span: 12, order: "first" }} lg={{ span: 6, order: "last" }} className={styles.imgContainer}>
                        <img src="/assets/image 4.svg" alt="four" />
                        <img src="/assets/image 3.svg" alt="three" />
                        <img src="/assets/image 6.svg" alt="six" />
                        <img src="/assets/image-5.svg" alt="five" />
                    </Col>
                </Row>
            </section>

            <article className={`d-flex align-items-center ${styles.band}`}>
                <img src="/assets/Group 59537.svg" alt="59537" />
                <img src="/assets/Group 4040.svg" alt="59537" />
                <img src="/assets/Frame 4041.svg" alt="59537" />
            </article>
        </>
    );
}

export default Main;