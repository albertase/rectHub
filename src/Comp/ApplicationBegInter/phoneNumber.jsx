import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



const inputStyle = {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    borderRadius: '4px',
    // padding: '24px 0',
    fontSize: '14px',
    width: '100%',
    color: '#333',
};
const PhoneNumberValidation = ({ name, phoneValue, phoneChange }) => {
    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    const handleChange = (value) => {
        phoneChange({ target: { name, value } });
    };

    const isValidPhoneNumber = validatePhoneNumber(phoneValue);

    return (
        <div className="phone-input-container">
            <PhoneInput
                inputStyle={inputStyle}
                inputClass='phoneInput'
                country={'ng'}
                value={phoneValue}
                onChange={handleChange}
                inputProps={{
                    required: true,
                }}
            />
            {isValidPhoneNumber && (
                <p style={{ color: 'red' }}>Please enter a valid phone number.</p>
            )}
        </div>
    );
};

export default PhoneNumberValidation;