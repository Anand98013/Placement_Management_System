import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const registerAction = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        let validationErrors = {};

        // Password validation
        if (password !== confirmPassword) {
            validationErrors = { password: "Passwords do not match", confirmPassword: "Passwords do not match" };
        }

        setValidationErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setIsSubmitting(false);
            return;
        }

        let payload = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        };

        axios.post('http://localhost:9090/api/users/', payload)
        .then((response) => {
            setIsSubmitting(false);
            localStorage.setItem('token', response.data.token);
            toast.success("Registration successful!");
            navigate("/login");
            window.close();
            // setName("");
            // setEmail("");
            // setPassword("");
            // setConfirmPassword("");
        })
        .catch((error) => {
            setIsSubmitting(false);
            if (error.response && error.response.data && error.response.data.errors) {
                setValidationErrors(error.response.data.errors);
                toast.error("Invalid Data register!!");
            } else {
                console.error("Error occurred:", error);
                toast.error("Registration failed. Please try again.");
            }
        });
    };


    return (
        <div className='container'>
            <div className="card-body">
                <h1 className="card-title mb-4">Register</h1>
                <form onSubmit={registerAction}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name: </label>
                        <input type="text" className="form-control" id="name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        {validationErrors.name && <div className="text-danger">{validationErrors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address: </label>
                        <input type="email" className="form-control" id="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {validationErrors.email && <div className="text-danger">{validationErrors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password: </label>
                        <input type="password" className="form-control" id="password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {validationErrors.password && <div className="text-danger">{validationErrors.password}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm_password" className="form-label">Confirm Password: </label>
                        <input type="password" className="form-control" id="confirm_password" required name="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        {validationErrors.confirmPassword && <div className="text-danger">{validationErrors.confirmPassword}</div>}
                    </div>
                    <div className="d-grid gap-2">
                        <button disabled={isSubmitting} type="submit" className="btn btn-primary btn-block">Register Now</button>
                        <p className="text-center">Have already an account <NavLink to="/login">Login here</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
