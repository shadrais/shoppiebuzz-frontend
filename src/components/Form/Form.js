import React, { useState } from 'react';
import './Form.css';
import login_register from '../Login_register/Login_register'
import FormSuccess from '../Form/formSuccess'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src='img/img-2.svg' alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <login_register submitForm={submitForm} />
                ) : (
                        <FormSuccess />
                    )}
            </div>
        </>
    );
};

export default Form;
