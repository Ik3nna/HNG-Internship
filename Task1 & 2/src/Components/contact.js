import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function Contact () {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            alert("Please provide the necessary information")
        } else {
            alert("Nduks will get back to you as soon as possible");
        }

        setValidated(true);
    } 
    
    return(
        <section className="contact mt-4">
            <h2>Contact Me</h2>

            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <Form noValidate validated={validated} className="mt-4" onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your first name" />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your last name" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="yourname@email.com" />
                    <Form.Text className="text-muted">
                        This is a hint to help the user.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email address.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" required rows={5} placeholder="Send me a message and I'll reply you as soon as possible..." />
                    <Form.Control.Feedback type="invalid">
                        Please enter a message.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="Checkbox">
                    <Form.Check type="checkbox" label="You agree to providing your data to Nduks who may contact you." />
                </Form.Group>

                <Button className="mb-5" variant="primary" type="submit" id="btn__submit">
                    Send message
                </Button>
            </Form>
        </section>
    );
}

export default Contact;