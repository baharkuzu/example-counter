import React from 'react';
import FormPage from "./FormPage";
import { Container } from 'reactstrap';

const FormHeader = (props) => {
    return (
        <div>
            <Container className="themed-container" fluid="sm">
                <h3>Contact Us</h3>
            <FormPage />
            </Container>
        </div>
    );
};

export default FormHeader;