import React, { useState } from "react";
import { Container, Grid } from "../../Base/grid";
import Box from "../../Base/box";
import { H, P } from "../../Base/text";
import { Forms, Input, Label, Option, Selects } from "../../Base/form";
import { Button } from "../../Base/button";
import PhoneNumberValidation from "./phoneNumber";
import axios from "axios";
import { City, Country } from "country-state-city";
import FlagsSelect from "react-flags-select";
import Select from 'react-select';

const Form = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        preferredTrack: "",
        status: "",
        employmentStatus: "",
        educationLevel: "",
        country: "",
        city: "",
        phoneNo: "",
        gender: "",
        yearsOfExperience: 0,
        yearsOfRemoteExperience: 0,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState('');

    const handleCountryChange = (countryCode) => {
        setSelectedCountry(countryCode);
        setSelectedCity('');

        // Get cities of the selected country
        const countryCities = City.getCitiesOfCountry(countryCode);
        setCities(countryCities);

        console.log("Selected Country:", countryCode);
    };

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption ? selectedOption.value : '');

        console.log("Selected City:", selectedOption ? selectedOption.value : '');
    };

    const countries = Country.getAllCountries();
    const cityOptions = cities.map((city) => ({ value: city.name, label: city.name }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        console.log(name, value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setIsSubmitting(true);
                const payload = {
                    ...formData,
                    country: selectedCountry,
                    city: selectedCity,
                };
                await sendFormData(payload);
                setIsSubmitting(false);
                setSubmitSuccess('Form submitted successfully')
                // Reset form after successful submission if needed
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    preferredTrack: "",
                    status: "",
                    employmentStatus: "",
                    educationLevel: "",
                    country: "",
                    city: "",
                    phoneNo: "",
                    gender: "",
                    yearsOfExperience: 0,
                    yearsOfRemoteExperience: 0,
                });
                setSelectedCountry('');
                setSelectedCity('');
            } catch (error) {
                setIsSubmitting(false);
                setSubmitError("An error occurred while submitting the form. Please try again later.");
                console.error(error);
            }
        }
    };



    const validateForm = () => {
        const requiredFields = [
            "firstName",
            "lastName",
            "email",
            "preferredTrack",
            "status",
            "employmentStatus",
            "educationLevel",
            "country",
            "city",
            "phoneNo",
            "gender",
        ];


        for (const field of requiredFields) {
            if (formData[field].trim() === "") {
                alert("Please fill in all required fields.");
                return false;
            }
        }

        return true;
    };

    const sendFormData = async (data) => {
        try {
            // Make an HTTP POST request to the server with the form data
            const response = await axios.post("/other/endpoint", data);
            return response.data; // Return the server response if needed
        } catch (error) {
            throw new Error("Failed to submit form data to the server."); // Throw an error if the request fails
        }
    };

    return (
        <div>
            <Box bg="#fff" pad="20px 60px" boxFormContainer>
                <Grid gtc="repeat(2, 1fr)" appForm>
                    <Box pad="20px 10px" boxForm>
                        <H formH fs="60px" lh="59.44px" pad="5px 0">
                            Develop a skill set that will drive advancement
                        </H>
                        <P formP fs="17px" lh="32.01px" pad="10px 0">
                            Thank you for your interest in applying to Recthub Academy. To continue your application process please note that you’ll be charged <b>$20.</b>
                        </P>
                        <img src="./Images/formImage.svg" style={{ paddingTop: "20px" }} width="90%" alt="Form Image" />
                    </Box>
                    <Box bg="#F3F4F6" pad="40px 20px">
                        <Forms onSubmit={handleSubmit}>
                            <Grid gtc="repeat(2, 1fr)" gap="40px" formGap>
                                <Container appForms>
                                    <Label>First name</Label>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        input
                                        style={{ backgroundColor: '#F3F4F6' }}
                                    />
                                </Container>
                                <Container appForms>
                                    <Label>Last name</Label>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        input
                                        style={{ backgroundColor: '#F3F4F6' }}
                                    />
                                </Container>
                                <Container gridColumn="1 / span 2">
                                    <Label>E-mail address</Label>
                                    <Input
                                        style={{ width: "96%", backgroundColor: '#F3F4F6' }}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        input
                                    />
                                </Container>
                                <Container appForms>
                                    <Label>Preferred Track</Label>
                                    <Selects
                                        name="preferredTrack"
                                        value={formData.preferredTrack}
                                        onChange={handleChange}
                                    >
                                        <Option value="">Select Option</Option>
                                        <Option value="Machine Learning">Machine Learning</Option>
                                        <Option value="Data Science">Data Science</Option>
                                        <Option value="Web Development">Web Development</Option>
                                    </Selects>
                                </Container>
                                <Container appForms>
                                    <Label>Status</Label>
                                    <Selects
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        <Option value="option-1">Select Option</Option>
                                        <Option value="option-2">Machine Learning</Option>
                                        <Option value="option-3">Machine Learning</Option>
                                    </Selects>
                                </Container>
                                <Container appForms>
                                    <Label>Employment Status</Label>
                                    <Selects
                                        name="employmentStatus"
                                        value={formData.employmentStatus}
                                        onChange={handleChange}
                                    >
                                        <Option value="option-1">Select Option</Option>
                                        <Option value="option-2">Machine Learning</Option>
                                        <Option value="option-3">Machine Learning</Option>
                                    </Selects>
                                </Container>
                                <Container appForms>
                                    <Label>Level of Education</Label>
                                    <Selects
                                        name="educationLevel"
                                        value={formData.educationLevel}
                                        onChange={handleChange}
                                    >
                                        <Option value="option-1">Select Option</Option>
                                        <Option value="option-2">Machine Learning</Option>
                                        <Option value="option-3">Machine Learning</Option>
                                    </Selects>
                                </Container>
                                <Container appForms>
                                    <Label>Country of Residence</Label>
                                    <div style={{ height: '44px', border: '1px solid gray' }}>
                                        <FlagsSelect
                                            className="country-select"
                                            countries={countries.map((country) => country.isoCode)}
                                            onSelect={(countryCode) => handleCountryChange(countryCode)}
                                            selected={selectedCountry}
                                            searchable={true}
                                        />
                                    </div>
                                </Container>
                                <Container appForms>
                                    <Label>City</Label>
                                    <div style={{ height: '44px', border: '1px solid gray', backgroundColor: '#F3F4F6' }}>
                                        <Select
                                            options={cityOptions}
                                            value={cityOptions.find((option) => option.value === selectedCity)}
                                            onChange={handleCityChange}
                                            isSearchable={true}
                                            isDisabled={!selectedCountry}
                                        />
                                    </div>
                                </Container>
                                <Container appForms>
                                    <Label>Phone No</Label>
                                    <PhoneNumberValidation
                                        name="phoneNo"
                                        phoneValue={formData.phoneNo}
                                        phoneChange={handleChange}
                                    />
                                </Container>
                                <Container appForms>
                                    <Label>Gender</Label>
                                    <Selects
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <Option value="Select Gender">Select Gender</Option>
                                        <Option value="Male">Male</Option>
                                        <Option value="Female">Female</Option>
                                    </Selects>
                                </Container>
                                <Container gridColumn="1 / span 2">
                                    <P>How many years of full-time ML engineering do you have?</P>
                                </Container>
                                <Container appForms>
                                    <Label>Years of experience</Label>
                                    <Input
                                        type="number"
                                        name="yearsOfExperience"
                                        value={formData.yearsOfExperience}
                                        onChange={handleChange}
                                        input
                                        style={{ backgroundColor: '#F3F4F6' }}
                                    />
                                </Container>
                                <Container appForms>
                                    <Label>Years of remote experience</Label>
                                    <Input
                                        type="number"
                                        name="yearsOfRemoteExperience"
                                        value={formData.yearsOfRemoteExperience}
                                        onChange={handleChange}
                                        input
                                        style={{ backgroundColor: '#F3F4F6' }}
                                    />
                                </Container>
                            </Grid>
                            {submitSuccess && <p style={{ color: "green" }}>{submitSuccess}</p>}
                            {submitError && <p style={{ color: "red" }}>{submitError}</p>}
                            <Button primary type="submit" disabled={isSubmitting} style={{
                                cursor: isSubmitting ? "not-allowed" : "pointer",
                            }}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </Forms>
                    </Box>
                </Grid>
            </Box>
        </div>
    );
};

export default Form;





