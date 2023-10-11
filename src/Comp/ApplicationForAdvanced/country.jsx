import React, { useEffect, useState, useRef } from 'react';
// import './CustomDropdown.css';

const CustomDropdown = ({ name, countryValue, countryChange }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                const formattedCountries = data.map((country) => ({
                    name: country.name.common,
                    flag: country.flags.png,
                    code: country.cca2,
                }));
                formattedCountries.sort((a, b) => a.name.localeCompare(b.name)); // Sort countries alphabetically
                setCountries(formattedCountries);
            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="custom-dropdown">
            <div className="dropdown" ref={dropdownRef}>
                <div className="selected-option" onClick={toggleDropdown}>
                    {selectedCountry && (
                        <img
                            src={countries.find((country) => country.name === selectedCountry)?.flag}
                            alt={selectedCountry}
                            className="selected-flag"
                        />
                    )}
                    {selectedCountry ? (
                        <span>{selectedCountry}</span>
                    ) : (
                        <span className="placeholder">Select a country</span>
                    )}
                </div>
                <ul className={`options ${isOpen ? 'open' : ''}`}>
                    {countries.map((country) => (
                        <li
                            key={country.code}
                            className="option"
                            onClick={() => {
                                setSelectedCountry(country.name);
                                setIsOpen(false);
                                countryChange({ target: { name, value: country.name } });
                            }}
                        >
                            <img src={country.flag} alt={country.name} className="flag" />
                            {country.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CustomDropdown;