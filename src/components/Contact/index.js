import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        document.querySelectorAll('.form-control').forEach((input) => input.value="")
    }

    return (
        <div className='container'>
            <h1>Contact me</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input className='form-control' type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input className='form-control' type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="message">Message:</label>
                    <textarea className='form-control' name="message" rows="4" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;