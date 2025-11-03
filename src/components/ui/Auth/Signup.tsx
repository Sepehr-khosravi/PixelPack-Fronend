//React
import React from "react";
//hooks
import {useState} from 'react';
import {useAuth} from "../../../hooks/auth";

//interface
import type {FormDataSignUp} from "../../../types";

//config
import config from "../../../config";

//axios
import axios from "axios";

export default function SignUp(): React.ReactElement {
    const {login} = useAuth();
    const [errorText, setError] = useState<string>("");
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

    const handleSubmit: React.EventHandler<any> = async(e: any): Promise<void> => {
        e.preventDefault();
        try{
            if(formData.confirmPassword !== formData.password || !formData.password || !formData.confirmPassword){
                setError("invalid passwords");
                return
            }
            const response : any = await axios.post(config.Api.Auth.Signup, {
                username : formData.fullName,
                email : formData.email,
                password : formData.password
            });
            if(!response || !response.data || !response.data.token || !response.data.data){
                setError(response.error.toString());
                return ;
            }
            login(response.data.token, response.data.data);
        }
        catch(e : any){
            console.error(e);
        }
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
            <label>
                <p style={styles.textError +  {display : errorText ? "block" : "none"}}>{errorText}</p>
            </label>

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
    textError : {
       color : 'red'
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