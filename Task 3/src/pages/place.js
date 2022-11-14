import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { placeAdventure } from "../components/data";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./place.module.css";

function Place () {
    return(
        <motion.main initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            transition={{ duration: 3 }}
        >
            <Header />

            <section className={styles.content}>
                <article>
                    <div>Restaurant</div>
                    <div>Cottage</div>
                    <div>Castle</div>
                    <div>Fantast city</div>
                    <div>Beach</div>
                    <div>Cabins</div>
                    <div>Off-grid</div>
                    <div>Farm</div>
                    <div className={styles.location}>
                        <div>Location</div>
                        <img src="/assets/setting-5.svg" alt="vector" />
                    </div>
                </article>

                <Row>
                    {placeAdventure.map((item)=>{
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

            <Footer />
        </motion.main>
    );
}

export default Place;