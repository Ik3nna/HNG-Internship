import React from "react";
import styles from "./metabnb.module.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Metabnb () {

    return(
        <section className={`mt-3 ${styles.content}`}>
            <Row className={styles.row}>
                <Col md={6}>
                    <h2>
                        Metabnb NFTs
                    </h2>

                    <p className="mt-4 mb-5">
                        Discover our NFT gift cards collection. Loyal customers
                        get amazing gift cards which are traded as NFTs. These NFTs
                        gives our customer access to loads of our exclusive services
                    </p>

                    <Link to="/nfts">
                        Learn more
                    </Link>
                </Col>
            </Row>
            
        </section>
    );
}

export default Metabnb;