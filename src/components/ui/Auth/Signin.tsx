//React
import React from "react";
//hooks
import {useState} from 'react';
import {useAuth} from "../../../hooks/auth.ts";
//interface
import type {FormDataSignIn} from "../../../types";
//config
import config from "../../../config";
//axios
import axios from "axios";


export default function SignIn(): React.ReactElement {
    const {login} = useAuth();
    //data
    const [formData, setFormData] = useState<FormDataSignIn>({
        email: '',
        password: ''
    });

    const handleChange: React.EventHandler<any> = (e: any): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit: React.EventHandler<any> = async (e: any) : Promise<void> => {
        e.preventDefault();
        try{
            const response : any = await axios.post(config.Api.Auth.Signin, formData);
            if(!response || !response.data || !response.data.token || !response.data.data){
                console.error("error : " , response.statusText);
                return;
            }
            login(response.data.token, response.data.data);
            location.pathname = "/home";
        }catch (e : any){
            console.error(e);
        }
    };

    return (
        <form style={styles.form} autoComplete="off" data-form-type="ordinary" onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
                <label style={styles.label}>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter your email"
                    required
                    data-lpignore="true"
                    data-form-type="other"
                    autoComplete="off"
                    autoFocus={true}
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
                    autoComplete="new-password"
                    placeholder="Enter your password"
                    data-lpignore="true"
                    data-form-type="other"
                    required
                />
            </div>

            <div style={styles.options}>
                <a href="#" style={styles.forgotLink}>Forgot password?</a>
            </div>

            <button type="submit" style={styles.submitButton}>
                Sign In
            </button>

            <div style={styles.divider}>
                <span style={styles.dividerText}>Or continue with</span>
            </div>

            <div style={styles.socialButtons}>
                <button type="button" style={styles.socialButton}>
                    Google
                </button>
                <button type="button" style={styles.socialButton}>
                    GitHub
                </button>
            </div>
        </form>
    );
}

const styles: any = {
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        zIndex: 1000,
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
        outline: "none",
    },
    inputFocus: {
        outline: "none",
        borderColor: "var(--color-accent)",
        boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)"
    },
    options: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px"
    },
    remember: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "var(--color-text-muted)",
        cursor: "pointer",
    },
    checkbox: {
        accentColor: "var(--color-accent)"
    },
    forgotLink: {
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
    },
    divider: {
        position: "relative",
        textAlign: "center",
        margin: "20px 0"
    },
    dividerText: {
        backgroundColor: "var(--color-background)",
        color: "var(--color-text-muted)",
        fontSize: "12px",
        padding: "0 16px",
        position: "relative",
        zIndex: "1"
    },
    socialButtons: {
        display: "flex",
        gap: "12px"
    },
    socialButton: {
        flex: 1,
        padding: "10px 16px",
        borderRadius: "8px",
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
        fontSize: "14px",
        cursor: "pointer",
        transition: "all 0.3s ease"
    }
};
