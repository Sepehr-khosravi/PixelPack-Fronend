//React
import React from "react";
//hooks
import {useState} from 'react';
//Components
import SignIn from '../components/ui/Auth/Signin.tsx';
import SignUp from '../components/ui/Auth/Signup.tsx';
//assets
import BackgroundSource from "../assets/article-background-two.jpg";


export default function Auth(): React.ReactElement {
    const [isSignIn, setIsSignIn] = useState<boolean>(true);

    return (
        <div style={styles.container} className="auth">
            <div style={styles.backgroundImage} className="image"></div>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Welcome to Your Startup</h1>
                    <p style={styles.subtitle}>
                        {isSignIn ? 'Sign in to your account' : 'Create your account'}
                    </p>
                </div>

                <div style={styles.toggleContainer}>
                    <button
                        style={{
                            ...styles.toggleButton,
                            ...(isSignIn ? styles.activeToggle : {})
                        }}
                        onClick={() => setIsSignIn(true)}
                    >
                        Sign In
                    </button>
                    <button
                        style={{
                            ...styles.toggleButton,
                            ...(!isSignIn ? styles.activeToggle : {})
                        }}
                        onClick={() => setIsSignIn(false)}
                    >
                        Sign Up
                    </button>
                </div>

                {isSignIn ? <SignIn/> : <SignUp/>}

                <div style={styles.footer}>
                    <p style={styles.footerText}>
                        {isSignIn ? "Don't have an account? " : "Already have an account? "}
                        <button
                            style={styles.footerLink}
                            onClick={() => setIsSignIn(!isSignIn)}
                        >
                            {isSignIn ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles: any = {
    container: {
        width: "95%",
        marginLeft: "auto",
        minHeight: "100vh",
        backgroundColor: "var(--color-background)",
    },
    backgroundImage: {
        position : "fixed",
        backgroundImage : `url(${BackgroundSource})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.7)",
        width : "67%",
        zIndex : 1,
        height : "100%",
        top : "0%",
        left : "0%",
    },
    card: {
        backgroundColor: "var(--color-background)",
        padding: "40px",
        border: "1px solid var(--color-border)",
        width: "35%",
        height: "100%",
        marginLeft : "auto",
        zIndex: 2,
    },
    header: {
        textAlign: "center",
        marginBottom: "30px"
    },
    title: {
        color: "var(--color-text)",
        fontSize: "24px",
        fontWeight: "600",
        marginBottom: "8px"
    },
    subtitle: {
        color: "var(--color-text-muted)",
        fontSize: "14px"
    },
    toggleContainer: {
        display: "flex",
        backgroundColor: "var(--color-background)",
        borderRadius: "8px",
        padding: "4px",
        marginBottom: "30px"
    },
    toggleButton: {
        flex: 1,
        padding: "10px 16px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "transparent",
        color: "var(--color-text-muted)",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        transition: "all 0.3s ease"
    },
    activeToggle: {
        backgroundColor: "var(--color-accent)",
        color: "var(--color-accent-text)",
        boxShadow: "0 2px 8px rgba(99, 102, 241, 0.3)"
    },
    footer: {
        textAlign: "center",
        marginTop: "20px",
        paddingTop: "20px",
        borderTop: "1px solid var(--color-border)"
    },
    footerText: {
        color: "var(--color-text-muted)",
        fontSize: "14px"
    },
    footerLink: {
        background: "none",
        border: "none",
        color: "var(--color-accent)",
        cursor: "pointer",
        fontFamily : "Minecraftia"

    }
};