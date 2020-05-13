import React, {Component} from 'react';
import {connect} from "react-redux";
import {form} from "../redux/actions";
import {Formik} from "formik";
import { Button, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';
import "../App.css";
import * as Yup from "yup";

const todoAppValidation = Yup.object().shape({
    firstName: Yup.string().required("First Name girmelisiniz."),
    lastName: Yup.string().required("Last Name girmelisiniz."),
    email: Yup.string().required("E-mail adresi girmelisiniz.").email("Mail adresinizi doğru girmelisiniz"),
    phoneNumber: Yup.string().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Telefon numarası geçerli değil"),
    website: Yup.string().url("Web site adresinizi giriniz")
})

class FormPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Formik
                    initialValues= {{
                        firstName: "",
                        lastName: "",
                        company: "",
                        phoneNumber:"",
                        email: "",
                        website: "",
                        time: false,//radio button
                        newsletter: false//checkbox
                    }}
                    validationSchema={todoAppValidation}
                    onSubmit={(values, {resetForm}) => {
                        console.log(values)
                        this.props.form(values);
                        window.alert("Form Gönderildi")
                        resetForm({})
                    }}
                    >
                    {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    handleReset,
                    isSubmitting,
                    setFieldValue
                    }) => (
                    <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup>
                                <Label className="description">First Name*</Label>
                                <Input 
                                    invalid={errors.firstName}
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name Giriniz"
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                            {
                                errors.firstName &&
                                <FormFeedback>
                                    {errors.firstName}
                                </FormFeedback>
                            }
                            </FormGroup>
                        </div>
                        <div className="col-md-6">
                            <FormGroup>
                                <Label className="description">Last Name*</Label>
                                <Input 
                                invalid={errors.lastName}
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name Giriniz"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                            {
                                errors.lastName &&
                                <FormFeedback>
                                    {errors.lastName}
                                </FormFeedback>
                            }
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup>
                                <Label className="description">Company</Label>
                                <Input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    value={values.company}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-6">
                            <FormGroup>
                                <Label className="description">Phone Number</Label>
                                <Input
                                    invalid={errors.phoneNumber}
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                />
                                {
                                    errors.phoneNumber && 
                                    <FormFeedback>
                                        {errors.phoneNumber}
                                    </FormFeedback>
                                }
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup>
                                <Label className="description">E-mail*</Label>
                                <Input 
                                    invalid={errors.email}
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {
                                    errors.email &&
                                    <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>
                                }
                            </FormGroup>
                        </div>
                        <div className="col-md-6">
                            <FormGroup>
                                <Label className="description">Your Website</Label>
                                <Input
                                    invalid={errors.website} 
                                    type="url"
                                    name="website"
                                    placeholder="http://www.example.com"
                                    value={values.website}
                                    onChange={handleChange}
                                />
                                {
                                    errors.website && 
                                    <FormFeedback>
                                        {errors.website}
                                    </FormFeedback>
                                }
                            </FormGroup>
                        </div>
                    </div>

                    <Label className="description">When is the best time of day to reach you?</Label>
                    <FormGroup check>
                        <Label check>
                        <Input 
                            type="radio"
                            name="time"
                            value={values.time}
                            onChange={() => {setFieldValue("time", "Morning")}} 
                            checked={values.time === "Morning"}
                        />
                        Morning
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input 
                            type="radio"
                            name="time" 
                            value={values.time}
                            onChange={() => {setFieldValue("time", "Evening")}}
                            checked={values.time === "Evening"}
                            />
                        Evening
                        </Label>
                    </FormGroup>

                    <Label className="description">Would you like to recieve our email newsletter?</Label>
                    <FormGroup check>
                        <Label check>
                        <Input 
                        type="checkbox" 
                        name="newsletter"
                        value={values.newsletter}
                        onChange={handleChange}
                        checked={values.newsletter}
                        />
                        Sure!
                        </Label>
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit" color="primary"
                        style={{
                            opacity: (Object.keys(errors).length > 0 ) || isSubmitting ? "0.2" : "1"
                        }}>
                        Submit
                        </Button>
                    </FormGroup>

                    </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

const mapDispatchToProps = {
    form: form
};

export default connect(null, mapDispatchToProps)(FormPage);