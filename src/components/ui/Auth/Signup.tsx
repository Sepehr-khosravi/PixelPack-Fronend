//React
import React from "react";
//hooks
import {useState} from 'react';

//interface
import type {FormDataSignUp} from "../../../types";

export default function SignUp() {
    const [formData, setFormData] = useState<FormDataSignUp>({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange: React.EventHandler<any> = (e: any): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit: React.EventHandler<any> = (e: any): void => {
        e.preventDefault();
        // Handle sign up logic here
        console.log('Sign up attempt:', formData);
    };

    return (
        <form style={styles.form} autoComplete="off" data-form-data="ordinary" onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter your full name"
                    required
                    autoComplete="username"
                />
            </div>

            <div style={styles.inputGroup}>
                <label style={styles.label}>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter your email"
                    autoComplete="off"
                    readOnly
                    onFocus={(e) => e.target.removeAttribute('readonly')}
                    data-lpignore="true"
                    data-form-type="other"
                    data-1p-ignore="true" // For 1Password
                    data-bwignore="true"
                    required
                />
            </div>

            <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    readOnly
                    onFocus={(e) => e.target.removeAttribute('readonly')}
                    data-lpignore="true"
                    data-form-type="other"
                    data-1p-ignore="true"
                    data-bwignore="true"
                    required
                />
            </div>

            <div style={styles.inputGroup}>
                <label style={styles.label}>Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Confirm your password"
                    required
                />
            </div>

            <div style={styles.terms}>
                <label style={styles.remember}>
                    <input type="checkbox" style={styles.checkbox} required/>
                    I agree to the <a href="#" style={styles.termsLink}>Terms of Service</a> and <a href="#"
                                                                                                    style={styles.termsLink}>Privacy
                    Policy</a>
                </label>
            </div>

            <button type="submit" style={styles.submitButton}>
                Create Account
            </button>
        </form>
    );
}

const styles: any = {
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    },
    label: {
        color: "var(--color-text)",
        fontSize: "14px",
        fontWeight: "500"
    },
    input: {
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
        fontSize: "14px",
        transition: "all 0.3s ease",
        outline : "none",
    },
    terms: {
        fontSize: "14px",
        marginBottom: "10px"
    },
    remember: {
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        color: "var(--color-text-muted)",
        cursor: "pointer",
        lineHeight: "1.4"
    },
    checkbox: {
        accentColor: "var(--color-accent)",
        marginTop: "2px"
    },
    termsLink: {
        color: "var(--color-accent)",
        textDecoration: "none"
    },
    submitButton: {
        padding: "12px 16px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "var(--color-accent)",
        color: "var(--color-accent-text)",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease"
    }
};