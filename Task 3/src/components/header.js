import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Modal, Accordion } from "react-bootstrap"
import useSticky from "./utils";

function DropModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal" className="connect">
            Connect Wallet
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Choose your preferred wallet</p>
          
          <div className="body">
            <Accordion>
                <Accordion.Item eventKey="0" className="item mb-3">
                    <Accordion.Header className="acHeader">
                        <img src="/assets/image 69.svg" alt="69" />  
                        <p>Metamask</p>                  
                    </Accordion.Header>
                        
                    <Accordion.Body>
                        <p className="comingsoon">Coming&nbsp;<span>soon</span>...</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="item mb-3">
                    <Accordion.Header className="acHeader">
                        <img src="/assets/image 66.svg" alt="66" />  
                        <p>WalletConnect</p> 
                    </Accordion.Header>

                    <Accordion.Body>
                        <p className="comingsoon">Coming&nbsp;<span>soon</span>...</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </div>
        </Modal.Body>
      </Modal>
    );
}

function Header() {
    const { sticky, stickyRef } = useSticky();
    const [active, setActive] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    return(
        <>
            <header ref={stickyRef} className={`${active && "active"} ${sticky && "fixed-nav"}`}>
                <div className="head">
                    <Link to="/" className="logo">
                        <img src="/assets/logo.svg" alt="logo" className="img-logo" />
                    </Link>

                    <nav>
                        <ul className="mt-4">
                            <li>
                                <NavLink to="/home" className={({isActive})=> isActive ? "activeLink" : null}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/place" className={({isActive})=> isActive ? "activeLink" : null}>
                                    Place to stay
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/nfts" className={({isActive})=> isActive ? "activeLink" : null}>
                                    NFTs
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/community" className={({isActive})=> isActive ? "activeLink" : null}>
                                    Community
                                </NavLink>
                            </li>

                            <li>
                                <button onClick={() => setModalShow(true)}>
                                    Connect wallet
                                </button>

                                <DropModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </li>
                        </ul>
                    </nav>

                    <div className="overlay"></div>
                    
                    <div className="hamburger-menu" onClick={()=>setActive(!active)}>
                        <div className="bar"></div>
                    </div>
                </div>
            </header>

            <div style={{
            height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
            }} />
        </>
    );
}

export default Header;